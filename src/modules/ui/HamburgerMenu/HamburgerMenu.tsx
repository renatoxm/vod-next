import React from 'react';
import { StyledHamburgerButton } from './styled';
import IconWrapper from '../IconWrapper';

interface IHamburgerMenuProps {
  children?: React.ReactNode;
  toggleMenu: VoidFunction;
}

const HamburgerMenu: React.FC<IHamburgerMenuProps> = ({ toggleMenu }) => {
  return (
    <StyledHamburgerButton onClick={toggleMenu}>
      <IconWrapper icon="MenuOutlined" />
    </StyledHamburgerButton>
  );
};

export default HamburgerMenu;
