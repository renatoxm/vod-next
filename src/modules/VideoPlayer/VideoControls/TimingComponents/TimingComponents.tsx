import { usePlayerTimings } from '@/lib/hooks/usePlayerTimings';
import React from 'react';
import { TimingsArea, VideoProgressArea } from '../styled';
import VideoProgress from '../VideoProgress';
import VideoTimeRanges from '../VideoTimeRanges';

interface ITimingComponentsProps {
  children?: React.ReactNode;
}

const TimingComponents: React.FC<ITimingComponentsProps> = (props) => {
  const timings = usePlayerTimings();

  return (
    <>
      <VideoProgressArea>
        <VideoProgress {...timings} />
      </VideoProgressArea>

      <TimingsArea>
        <VideoTimeRanges played={timings.played} duration={timings.duration} />
      </TimingsArea>
    </>
  );
};

export default TimingComponents;
