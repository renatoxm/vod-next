import { UpdateTimings } from '@/lib/hooks/usePlayerTimings';
import React from 'react';
import { StyledVideoProgress } from './styled';

interface IVideoProgressProps {
  children?: React.ReactNode;
  played: number;
  duration: number;
  buffered: number;
  updateTimings: UpdateTimings;
}

export const PercentMultiplier = 3;

const VideoProgress: React.FC<IVideoProgressProps> = ({
  played,
  duration,
  buffered,
  updateTimings,
}) => {
  const val =
    played === 0
      ? 0
      : Math.floor((played / duration) * 100 * PercentMultiplier);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = (Number(e.target.value) / PercentMultiplier / 100) * duration;
    updateTimings(value);
  };

  return (
    <StyledVideoProgress
      type={`range`}
      min={0}
      max={300}
      value={val}
      onChange={handleChange}
      style={{
        [`--progress-gradient` as string]: `
          linear-gradient(to right, #cc181e 0%, #cc181e ${
            val / PercentMultiplier
          }%, #777 ${
          val / PercentMultiplier
        }%, #777 ${buffered}%, var(--color-black) ${buffered}%, var(--color-black) 100%)
        `,
      }}
    />
  );
};

export default VideoProgress;
