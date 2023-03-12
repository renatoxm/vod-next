import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

import { StyledVideoTimeRanges } from './styled';

interface IVideoTimeRangesProps {
  children?: React.ReactNode;
  played: number;
  duration: number;
}

const VideoTimeRanges: React.FC<IVideoTimeRangesProps> = ({
  played,
  duration,
}) => {
  return (
    <StyledVideoTimeRanges>
      {dayjs.duration(played, `seconds`).format(`mm:ss`)}
      {` / `}
      {dayjs.duration(duration, `seconds`).format(`mm:ss`)}
    </StyledVideoTimeRanges>
  );
};

export default VideoTimeRanges;
