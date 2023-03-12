import React from 'react';
import { StyledControlsSection } from './styled';
import UserSection from '../UserSection';
import IconButton from '@/modules/ui/IconButton';
import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { observer } from 'mobx-react-lite';

interface IControlsSectionProps {
  children?: React.ReactNode;
}

const ControlsSection: React.FC<IControlsSectionProps> = (props) => {
  const { authStore } = useStore();

  return (
    <StyledControlsSection>
      {authStore.isAuthenticated && (
        <IconButton
          size={24}
          icon="VideoCallOutlined"
          title="Not Implemented"
        />
      )}
      <IconButton icon="GridViewOutlined" size={24} title="Not Implemented" />
      <UserSection />
    </StyledControlsSection>
  );
};

export default observer(ControlsSection);
