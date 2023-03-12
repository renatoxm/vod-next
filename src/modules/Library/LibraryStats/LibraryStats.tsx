import { useStore } from '@/lib/providers/GlobalStoreProvider';
import Text from '@/modules/ui/Text';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyledLibraryStats, StyledLibraryText } from './styled';

interface ILibraryStatsProps {
  children?: React.ReactNode;
}

const LibraryStats: React.FC<ILibraryStatsProps> = observer((props) => {
  const { likesStore, subscriptionsStore } = useStore();

  return (
    <StyledLibraryStats gap={29}>
      <StyledLibraryText>
        Subscriptions:
        <span style={{ marginLeft: 8 }}>
          {subscriptionsStore.subscriptions.length}
        </span>
      </StyledLibraryText>
      <Text weight="thin" size={16}>
        |
      </Text>
      <StyledLibraryText>
        Uploads:
        <span style={{ marginLeft: 8 }}>0</span>
      </StyledLibraryText>
      <Text weight="thin" size={16}>
        |
      </Text>
      <StyledLibraryText>
        Likes:
        <span style={{ marginLeft: 8 }}>{likesStore.likedIds.length}</span>
      </StyledLibraryText>
    </StyledLibraryStats>
  );
});

export default React.memo(LibraryStats);
