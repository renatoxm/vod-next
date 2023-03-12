import { useStore } from '@/lib/providers/GlobalStoreProvider';
import Button, { IButtonProps } from '@/modules/ui/Button';
import { observer } from 'mobx-react-lite';
import React from 'react';

interface ISubscribeButtonProps extends IButtonProps {
  children?: React.ReactNode;
  id: string;
}

const SubscribeButton: React.FC<ISubscribeButtonProps> = ({ id, ...props }) => {
  const { subscriptionsStore } = useStore();
  const { subscriptions, toggleSubscription } = subscriptionsStore;

  const isSubscribed = subscriptions.includes(id as string);

  return (
    <Button
      theme={isSubscribed ? `secondary` : `primary`}
      onClick={() => toggleSubscription(id as string)}
      {...props}
    >
      SUBSCRIBE{isSubscribed ? `D` : ``}
    </Button>
  );
};

export default observer(SubscribeButton);
