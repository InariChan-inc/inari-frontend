import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { isFocused } from "../../../redux/selectors/headerSearch";

import {
  SearchRounded, 
  Cooperation,
  Support,
  Help,
  Info,
} from '../../../atoms/icons';

import { 
  Header, 
  Menu,
} from '../../../components';

import tailwind from '../../../tailwind.config';


const GlobalLayout: FunctionComponent = ({
    children,
}) => {
  const isSearchFocused = useSelector(isFocused);

  return (
    <div className="flex w-full">
      <Menu
        menuItems={[
          {
            page: 'search',
            Icon: SearchRounded,
            text: 'Пошук',
          },
          {
            page: 'cooperation',
            Icon: Cooperation,
            text: 'Співпраця',
          },
          {
            page: 'help',
            Icon: Help,
            text: 'Технічна допомога',
          },
          {
            page: 'support',
            Icon: Support,
            text: 'Підтримати' + '\n' + 'нас',
          },
          {
            page: 'info',
            Icon: Info,
            text: 'Право-\nвласникам',
          }
        ]}
      />

      <div className="flex-1 relative overflow-x-hidden" style={{ marginLeft: 132 }}>
        <Header />
        {/**
          * COMPONENT ENTRY 
          */}
        <main className="mt-[80px]" style={{ minHeight: 'calc(100vh - 80px)' }}>
          {children}
        </main>
      </div>

      {/**
       * Global style (scrollbar)
       */}
      <style jsx global>{`
        html {
          scrollbar-color: ${tailwind.theme.colors.brown[2]} ${tailwind.theme.colors.yellow[5]} ;
          scrollbar-width: 10px;
        }

        /* width */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
          background-color: ${tailwind.theme.colors.yellow[5]};
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: ${tailwind.theme.colors.brown[2]};
          border-radius: 10px;
        }
        
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #000;
        }
      `}
      </style>
    </div>
  );
};


export default GlobalLayout;