import Input from '@/modules/ui/Input';
import Spacer from '@/modules/ui/Spacer';
import React from 'react';
import HistoryActions from '../HistoryActions';
import SelectHistoryType from '../SelectHistoryType';

interface IHistoryControlsProps {
  children?: React.ReactNode;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const HistoryControls: React.FC<IHistoryControlsProps> = ({
  search,
  setSearch,
}) => {
  return (
    <>
      <Input
        placeholder="Search watch history"
        iconLeft={`SearchOutlined`}
        padLeft={0}
        theme="underline"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Spacer vertical={43} />
      <SelectHistoryType />
      <Spacer vertical={20} />
      <hr
        style={{
          height: 1,
          border: `none`,
          background: `var(--color-grayDark)`,
        }}
      />
      <Spacer vertical={22} />
      <HistoryActions />
    </>
  );
};

export default React.memo(HistoryControls);
