import { TimeRanges, usePlayerRefs } from '@/lib/providers/player-api';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useVideoId } from './useVideoId';

export type UpdateTimings = (timeValue?: number) => void;

export const usePlayerTimings = () => {
  const timeIntervalRef = useRef<NodeJS.Timer>();
  const { video } = usePlayerRefs();
  const id = useVideoId();

  const [timings, setTimings] = useState<TimeRanges>({
    played: 0,
    buffered: 0,
    duration: 0,
  });

  useEffect(() => {
    return () => {
      clearInterval(timeIntervalRef.current);
    };
  }, []);

  const updateTimings: UpdateTimings = useCallback(
    (timeValue) => {
      if (!video.current) return;
      const videoElement = video.current;

      if (timeValue !== undefined) videoElement.currentTime = timeValue;

      const buffered = videoElement.buffered;
      setTimings({
        played: Math.round(videoElement.currentTime),
        buffered: buffered.length > 0 ? buffered.end(buffered.length - 1) : 0,
        duration: videoElement.duration,
      });
    },
    [video],
  );

  const setPlayInterval = useCallback(() => {
    timeIntervalRef.current = setInterval(updateTimings, 1000);
  }, [timeIntervalRef, updateTimings]);

  const resetPlayInterval = useCallback(() => {
    clearInterval(timeIntervalRef.current);
  }, [timeIntervalRef]);

  useEffect(() => {
    if (!video.current) return;
    const videoElement = video.current;

    videoElement.currentTime = 0;
    videoElement.load();
  }, [id]);

  useEffect(() => {
    if (!video.current) return;
    const videoElement = video.current;

    videoElement.addEventListener(`play`, setPlayInterval);
    videoElement.addEventListener(`pause`, resetPlayInterval);

    return () => {
      videoElement.removeEventListener(`play`, setPlayInterval);
      videoElement.removeEventListener(`pause`, resetPlayInterval);
    };
  }, [video, setPlayInterval, resetPlayInterval]);

  return {
    ...timings,
    updateTimings,
  };
};
