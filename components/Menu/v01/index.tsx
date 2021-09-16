import { useRouter } from 'next/router';
import { FunctionComponent } from "react";
import { Logo, Link } from '@atoms';
import { Copyright } from '@icons';
import {
  MenuItem,
  ScrollUpButton,
} from '@molecules';
import { MenuItemProps } from '@molecules/MenuItem';
import { Body } from '@typography';
import {
  CopyrightContainer,
  CopyrightText,
  LogoWrapper,
  MenuContainer,
  MenuItemsContainer,
} from './styles';


interface MenuProps {
    menuItems: Pick<MenuItemProps, 'to' | 'Icon' | 'text'>[],
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
      <MenuItemsContainer>
        {
          menuItems.map(({Icon, to, text}, index) => (
            <MenuItem
              key={index}
              to={to}
              Icon={Icon}
              text={text}
              isActive={router.asPath === '/' + to}
            />
          ))
        }
      </MenuItemsContainer>
      <ScrollUpButton />

      <CopyrightContainer>
        <Copyright
          color="yellow-5"
          size={18}
          style={{ marginBottom: 4 }}
        />
        <CopyrightText
          type={6}
          color="yellow-5"
        >
          {
            '' + new Date().getFullYear() + '\n"Inari"'
          }
        </CopyrightText>
      </CopyrightContainer>
    </MenuContainer>
  );
};


export default Menu;