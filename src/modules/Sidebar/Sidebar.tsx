import React, { useState } from 'react';
import SIDEBAR_SECTIONS from '@/const/navigation';
import HamburgerMenu from '@/modules/ui/HamburgerMenu';
import Logo from '@/modules/ui/Logo';
import SidebarSection from '@/modules/Sidebar/SidebarSection';
import { StyledLogoLink, StyledSidebar, StyledSidebarHeader } from './styled';

interface ISidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledSidebar
      style={{
        [`--sidebar-width` as string]: `${
          isOpen
            ? `200px`
            : `calc(var(--sidebar-padding-h) * 2 + var(--sidebar-icon-size))`
        }`,
        [`--sidebar-items-display` as string]: `${isOpen ? `initial` : `none`}`,
      }}
    >
      <StyledSidebarHeader>
        <HamburgerMenu toggleMenu={() => setIsOpen((state) => !state)} />
        <StyledLogoLink href={`/`}>
          <Logo />
        </StyledLogoLink>
      </StyledSidebarHeader>
      {SIDEBAR_SECTIONS.map((section, i) => (
        <SidebarSection key={i} {...section} />
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
