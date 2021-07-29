import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, JSXElementConstructor } from "react";
import { Logo } from '../../../atoms';
import { MenuItem } from '../../../molecules';


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
    <nav className="flex flex-col items-center h-screen m-0 fixed top-0 left-0 bottom-0 border-r border-yellow-1" style={{ width: 132 }}>
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
    </nav>
  );
};


export default Menu;