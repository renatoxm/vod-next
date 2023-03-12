import { SectionLinkType } from '@/const/navigation';
import Button from '@/modules/ui/Button';
import IconWrapper from '@/modules/ui/IconWrapper';
import Row from '@/modules/ui/Row';
import Text from '@/modules/ui/Text';
import { noop } from 'lodash';
import { useRouter } from 'next/router';
import React from 'react';
import { StyledMobileNavItem } from './styled';

interface IMobileNavItemProps extends SectionLinkType {
  children?: React.ReactNode;
}

const MobileNavItem: React.FC<IMobileNavItemProps> = ({
  icon,
  label,
  href,
}) => {
  const { pathname, push } = useRouter();

  return (
    <StyledMobileNavItem>
      <Button theme="text" onClick={!!href ? () => push(href) : noop}>
        <Row direction="column" gap={2}>
          <IconWrapper
            size={!label ? 42 : 30}
            icon={icon}
            color={href === pathname ? `var(--color-red)` : `inherit`}
          />
          <Text color="inherit" size={8} weight="regular">
            {label}
          </Text>
        </Row>
      </Button>
    </StyledMobileNavItem>
  );
};

export default MobileNavItem;
