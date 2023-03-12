import React from 'react';
import Spacer from '../Spacer';
import Text from '../Text';
import Title from '../Title';
import { StyledEmptyScreen, StyledEmptyScreenContent } from './styled';

interface IEmptyScreenProps {
  children?: React.ReactNode;
  emojiCode: string;
  title: string;
  text: string;
}

const EmptyScreen: React.FC<IEmptyScreenProps> = ({
  emojiCode,
  title,
  text,
  children,
}) => {
  return (
    <StyledEmptyScreen>
      <StyledEmptyScreenContent>
        <Title
          size={40}
          dangerouslySetInnerHTML={{ __html: `&#x${emojiCode}` }}
        />
        <Spacer vertical={26} />
        <Title size={36}>{title}</Title>
        <Spacer vertical={16} />
        <Text size={15} weight={`regular`}>
          {text}
        </Text>
        <Spacer vertical={40} />
        {children}
      </StyledEmptyScreenContent>
    </StyledEmptyScreen>
  );
};

export default EmptyScreen;
