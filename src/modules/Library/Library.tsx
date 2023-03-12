import { useLibraryTabs } from '@/lib/hooks/useLibraryTabs';
import Container from '@/modules/ui/Container';
import Row from '@/modules/ui/Row';
import Spacer from '@/modules/ui/Spacer';
import Tabs from '@/modules/ui/Tabs';
import { observer } from 'mobx-react-lite';
import React from 'react';
import LibraryStats from './LibraryStats';

interface ILibraryProps {
  children?: React.ReactNode;
  mockedTabs?: ReturnType<typeof useLibraryTabs>;
}

const Library: React.FC<ILibraryProps> = ({ mockedTabs = null }) => {
  const libraryTabs = useLibraryTabs();

  const tabs = mockedTabs ?? libraryTabs;
  const { tabProps, selectedTab } = tabs;

  return (
    <Container>
      <Row justify="space-between">
        <Tabs {...tabProps} />
        <LibraryStats />
      </Row>
      <Spacer vertical={27} />
      <div>{tabProps.tabs.length > 0 && selectedTab.children}</div>
    </Container>
  );
};

export default observer(Library);
