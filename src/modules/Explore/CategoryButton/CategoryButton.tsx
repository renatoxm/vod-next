import IconWrapper, { IconName } from '@/modules/ui/IconWrapper/IconWrapper';
import Text from '@/modules/ui/Text';
import React from 'react';
import Ink from 'react-ink';
import { StyledCategoryButton } from './styled';

export interface ICategory {
  label: string;
  icon: IconName;
}

export interface ICategoryButtonProps extends ICategory {
  onClick: VoidFunction;
}

const CategoryButton: React.FC<ICategoryButtonProps> = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <StyledCategoryButton onClick={onClick}>
      <Ink />
      <IconWrapper size={32} icon={icon} />
      <Text weight="regular" size={13} color="inherit">
        {label}
      </Text>
    </StyledCategoryButton>
  );
};

export default CategoryButton;
