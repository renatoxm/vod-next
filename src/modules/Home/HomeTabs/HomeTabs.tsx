import { CategoryTabs } from '@/const/categories';
import { useTabs } from '@/lib/hooks/useTabs';
import Tabs from '@/modules/ui/Tabs';
import React from 'react';

interface IHomeTabsProps {
  children?: React.ReactNode;
}

const HomeTabs: React.FC<IHomeTabsProps> = (props) => {
  const categoriesTabs = useTabs({ tabs: CategoryTabs, initialTabId: `All` });

  return <Tabs {...categoriesTabs.tabProps} />;
};

export default HomeTabs;
