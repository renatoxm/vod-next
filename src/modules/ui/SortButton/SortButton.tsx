import React from 'react';
import Button, { IButtonProps } from '../Button/Button';
import IconWrapper from '../IconWrapper';
import Row from '../Row';
import Text from '../Text';

interface ISortButtonProps extends IButtonProps {
  children?: React.ReactNode;
  text: string;
}

const SortButton: React.FC<ISortButtonProps> = ({ text, ...buttonProps }) => {
  return (
    <Button {...buttonProps} theme="text" title="Not Implemented">
      <Row gap={6}>
        <IconWrapper icon="SortOutlined" size={24} />
        <Text
          size={buttonProps.fontSize}
          weight="bold"
          color="var(--color-light)"
        >
          {text}
        </Text>
        <IconWrapper icon="ExpandMoreOutlined" size={24} />
      </Row>
    </Button>
  );
};

export default SortButton;
