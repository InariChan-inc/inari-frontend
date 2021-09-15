import Link from 'next/link';
import { FunctionComponent, JSXElementConstructor } from "react";
import { Button } from '@typography';
import { MenuItemContainer } from './styles';
import { BaseIconProps } from '@atoms/interfaces';

interface MenuItemProps {
    to: string,
    Icon: JSXElementConstructor<BaseIconProps>,
    text: string,
    isActive?: boolean,
}

const MenuItem: FunctionComponent<MenuItemProps> = ({
    to,
    Icon,
    text,
    isActive = false
}) => {
  return (
    <Link href={to}>
      <MenuItemContainer isActive={isActive}>
        <Icon size={36} />
        <Button type={2}>
          {text}
        </Button>
      </MenuItemContainer>
    </Link>
  );
};


export default MenuItem;