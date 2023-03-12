import { useSubsCollection } from '@/lib/hooks/useSubsCollection';
import { IVideoPreview } from '@/types/Video';
import Container from '@/modules/ui/Container';
import EmptyScreen from '@/modules/ui/EmptyScreen';
import React from 'react';
import SubscriptionsCollection from './SubscriptionsCollection';

interface ISubscriptionsProps {
  children?: React.ReactNode;
  mockedCollection?: IVideoPreview[];
}

const Subscriptions: React.FC<ISubscriptionsProps> = ({ mockedCollection }) => {
  const subsCollection = useSubsCollection();

  const collection = mockedCollection ?? subsCollection;

  if (collection.length === 0)
    return (
      <Container>
        <EmptyScreen
          emojiCode="1F62D"
          title="Don't Miss New Videos"
          text="You have no subscriptions yet"
        />
      </Container>
    );

  return (
    <Container>
      <SubscriptionsCollection collection={collection} />
    </Container>
  );
};

export default Subscriptions;
