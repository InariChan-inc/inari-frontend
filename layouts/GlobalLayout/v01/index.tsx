import { FunctionComponent } from "react";
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
  return (
    <div className="flex w-full">
      <Menu
        menuItems={[
          {
            to: 'search',
            Icon: SearchRounded,
            text: 'Пошук',
          },
          {
            to: 'cooperation',
            Icon: Cooperation,
            text: 'Співпраця',
          },
          {
            to: 'help',
            Icon: Help,
            text: 'Технічна допомога',
          },
          {
            to: 'support',
            Icon: Support,
            text: 'Підтримати' + '\n' + 'нас',
          },
          {
            to: 'info',
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
        <main id="main" className="overflow-y-auto mt-[72px] border-l border-t rounded-tl-[10px] border-yellow-1" style={{ height: 'calc(100vh - 79px)' }}>
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