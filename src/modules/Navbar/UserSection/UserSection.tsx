import Avatar from '@/modules/ui/Avatar';
import React from 'react';
import SignInButton from '@/modules/ui/SignInButton';
import IconButton from '@/modules/ui/IconButton';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/lib/providers/GlobalStoreProvider';

interface IUserSectionProps {
  children?: React.ReactNode;
}

const UserSection: React.FC<IUserSectionProps> = () => {
  const { authStore } = useStore();

  if (authStore.isAuthenticated) {
    return (
      <>
        <IconButton
          size={24}
          icon="NotificationsOutlined"
          title="Not Implemented"
        />
        <Avatar name={authStore.userName} />
      </>
    );
  }

  return <SignInButton fontSize={14} />;
};

export default observer(UserSection);
