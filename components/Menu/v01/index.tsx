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
  console.log('ROUTER', router.asPath);

  return (
    <nav className="flex flex-col items-center h-screen m-0" style={{ width: 132 }}>
      <Logo
        size={60}
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <div className="flex flex-col items-center">
        {
          menuItems.map(({Icon, page, text}, index) => (
            <MenuItem
              key={index}
              to={page}
              icon={<Icon className="text-brown fill-current" size={36} />}
              text={text}
              color="brown"
            />
          ))
        }
      </div>
    </nav>
  );
};


export default Menu;