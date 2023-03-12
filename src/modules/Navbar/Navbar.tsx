import React from 'react';
import ControlsSection from '@/modules/Navbar/ControlsSection';
import SearchSection from '@/modules/Navbar/SearchSection';
import { StyledNavbar, StyledNavbarLogo, StyledNavbarSpacer } from './styled';
import Logo from '@/modules/ui/Logo';

interface INavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<INavbarProps> = (props) => {
  return (
    <StyledNavbar>
      <StyledNavbarLogo>
        <Logo />
      </StyledNavbarLogo>
      <StyledNavbarSpacer />
      <SearchSection />
      <ControlsSection />
    </StyledNavbar>
  );
};

export default Navbar;
