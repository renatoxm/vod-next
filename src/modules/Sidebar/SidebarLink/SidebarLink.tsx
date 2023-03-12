import { useRouter } from 'next/router';
import React from 'react';
import { SectionLinkType } from '@/const/navigation';
import { StyledLink, StyledLinkIconWrapper, StyledLinkLabel } from './styled';
import IconWrapper from '@/modules/ui/IconWrapper';

const SidebarLink: React.FC<SectionLinkType> = ({ href, label, icon }) => {
  const { pathname } = useRouter();

  return (
    <StyledLink
      style={{
        [`--sidebarlink-color` as string]: `${
          href === pathname ? `var(--color-red)` : `inherit`
        }`,
      }}
      href={href}
      aria-label={label}
    >
      <StyledLinkIconWrapper>
        <IconWrapper icon={icon} />
      </StyledLinkIconWrapper>
      <StyledLinkLabel>{label}</StyledLinkLabel>
    </StyledLink>
  );
};

export default SidebarLink;
