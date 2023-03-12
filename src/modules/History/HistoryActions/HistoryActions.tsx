import { useStore } from '@/lib/providers/GlobalStoreProvider';
import Spacer from '@/modules/ui/Spacer';
import { observer } from 'mobx-react-lite';
import React from 'react';
import HistoryActionButton from '../HistoryActionButton';

interface IHistoryActionsProps {
  children?: React.ReactNode;
}

const HistoryActions: React.FC<IHistoryActionsProps> = (props) => {
  const { historyStore } = useStore();
  const { isWatching, clearHistory, toggleWatching } = historyStore;

  return (
    <>
      <HistoryActionButton
        icon="DeleteOutlined"
        text="Clear All Watch History"
        onClick={clearHistory}
      />
      <Spacer vertical={18} />
      <HistoryActionButton
        icon={isWatching ? `PauseCircleOutlined` : `PlayCircleOutlined`}
        text={`${isWatching ? `Pause` : `Turn on`} Watch History`}
        onClick={toggleWatching}
      />
      <Spacer vertical={18} />
      <HistoryActionButton
        icon="SettingsOutlined"
        text="Manage All History"
        title="Not implemented"
      />
    </>
  );
};

export default observer(HistoryActions);
