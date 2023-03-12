import { MOBILE_NAV } from '@/const/navigation';
import React from 'react';
import MobileNavItem from './MobileNavItem';
import { StyledMobileNav } from './styled';

interface IMobileNavProps {
  children?: React.ReactNode;
}

const MobileNav: React.FC<IMobileNavProps> = (props) => {
  return (
    <StyledMobileNav>
      {MOBILE_NAV.map((item) => (
        <MobileNavItem key={item.label} {...item} />
      ))}
    </StyledMobileNav>
  );
};

export default MobileNav;
