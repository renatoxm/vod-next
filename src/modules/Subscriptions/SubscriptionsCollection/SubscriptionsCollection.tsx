import { useSubsTabs } from '@/lib/hooks/useSubsTabs';
import GridContainer from '@/modules/ui/GridContainer';
import Spacer from '@/modules/ui/Spacer';
import Tabs from '@/modules/ui/Tabs';
import { IVideoPreview } from '@/types/Video';
import React from 'react';

interface ISubscriptionsCollectionProps {
  collection: IVideoPreview[];
}

const SubscriptionsCollection: React.FC<ISubscriptionsCollectionProps> = ({
  collection,
}) => {
  const { tabProps, selectedTab } = useSubsTabs(collection);

  return (
    <>
      <Tabs {...tabProps} />
      <Spacer vertical={27} />
      <GridContainer>
        {tabProps.tabs.length > 0 && selectedTab.children}
      </GridContainer>
    </>
  );
};

export default React.memo(SubscriptionsCollection);
