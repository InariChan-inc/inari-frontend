import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FunctionComponent,
  JSXElementConstructor
} from "react";
import { Logo } from '../../../atoms';
import { Copyright } from '../../../atoms/icons';
import {
  MenuItem,
  ScrollUpButton,
} from '../../../molecules';
import { Body } from '../../../typography';


interface MenuProps {
    menuItems: {
      page: string,
      Icon: JSXElementConstructor<{ className: string, size: number }>,
      text: string,
    }[],
}

const Menu: FunctionComponent<MenuProps> = ({
  menuItems
}) => {

  const router = useRouter();

  return (
    <nav className="flex flex-col items-center h-screen m-0 fixed top-0 left-0 bottom-0" style={{ width: 132 }}>
      <Link href="/">
        <div
          className="relative cursor-pointer w-full flex justify-center"
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Logo
            size={60}
          />
        </div>
      </Link>
      <div className="flex flex-col items-center">
        {
          menuItems.map(({Icon, page, text}, index) => (
            <MenuItem
              key={index}
              to={page}
              Icon={Icon}
              text={text}
              isActive={router.asPath === '/' + page}
            />
          ))
        }
      </div>
      <ScrollUpButton />

      <div className="flex flex-col items-center">
        <Copyright
          className="text-yellow-5 fill-current mb-1"
          size={18}
        />
        <Body
          className="text-yellow-5 whitespace-pre-line text-center"
          type={6}
        >
          {
            '' + new Date().getFullYear() + '\n"Inari"'
          }
        </Body>
      </div>
    </nav>
  );
};


export default Menu;