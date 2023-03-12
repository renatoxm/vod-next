import React from 'react';
import GridContainer from '@/modules/ui/GridContainer';
import VideoCard from '@/modules/Video/VideoCard';
import { useVideoCollection } from '@/lib/hooks/useVideoCollection';

interface IVideoCollectionProps {
  children?: React.ReactNode;
}

const VideoCollection: React.FC<IVideoCollectionProps> = () => {
  const { data } = useVideoCollection();

  if (!data) return null;

  return (
    <GridContainer>
      {!!data && data.map((vid) => <VideoCard key={vid.id} video={vid} />)}
    </GridContainer>
  );
};

export default React.memo(VideoCollection);
