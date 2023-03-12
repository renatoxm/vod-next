import React from 'react';
import { SidebarSectionType } from '@/const/navigation';
import SidebarLink from '@/modules/Sidebar/SidebarLink';
import { StyledSection, StyledSectionName } from './styled';

interface ISidebarSectionProps extends SidebarSectionType {
  children?: React.ReactNode;
}

const SidebarSection: React.FC<ISidebarSectionProps> = ({ name, links }) => {
  return (
    <StyledSection>
      {name && <StyledSectionName>{name}</StyledSectionName>}
      {links.map((l) => (
        <SidebarLink key={l.label} {...l} />
      ))}
    </StyledSection>
  );
};

export default SidebarSection;
