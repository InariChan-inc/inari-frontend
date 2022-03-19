import { useRouter } from 'next/router';
import { FunctionComponent } from "react";
import { Logo, Link } from '@atoms';
import { Copyright } from '@icons';
import {
  MenuItem,
  ScrollUpButton,
} from '@molecules';
import { MenuItemProps } from '@molecules/MenuItem';
import {
  BottomControllers,
  Controllers,
  CopyrightContainer,
  CopyrightText,
  LogoWrapper,
  MenuContainer,
  MenuItemsContainer,
} from './styles';


interface MenuProps {
    menuItems: Omit<MenuItemProps, 'isActive'>[];
}

const Menu: FunctionComponent<MenuProps> = ({ menuItems }) => {
  const router = useRouter();

  return (
    <MenuContainer>
      <Link href="/">
        <LogoWrapper>
          <Logo size={60} />
        </LogoWrapper>
      </Link>
      <Controllers>
        <MenuItemsContainer>
          {
            menuItems.map((menuItem) => (
              <MenuItem
                key={menuItem.to}
                {...menuItem}
                isActive={router.asPath.includes(menuItem.to)}
              />
            ))
          }
        </MenuItemsContainer>
        
        <BottomControllers>
          <ScrollUpButton />

          <CopyrightContainer>
            <Copyright
              color="yellow-5"
              size={18}
              style={{ marginBottom: 4 }}
            />
            <CopyrightText
              type={4}
              color="yellow-5"
            >
              {
                '' + new Date().getFullYear() + '\n"Inari"'
              }
            </CopyrightText>
          </CopyrightContainer>
        </BottomControllers>
      </Controllers>
    </MenuContainer>
  );
};


export default Menu;