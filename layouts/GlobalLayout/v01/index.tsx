import { FunctionComponent } from "react";

import {
  SearchRoundedCTA, 
  CooperationCTA,
  SupportCTA,
  HelpCTA,
  InfoCTA,
} from '../../../atoms';

import { 
  Header, 
  Menu,
} from '../../../components';

interface GlobalLayoutProps {
    children: any
}

const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({
    children
}) => (
  <div className="flex w-full">
    <Menu
      menuItems={[
        {
          page: 'search',
          Icon: SearchRoundedCTA,
          text: 'Пошук',
        },
        {
          page: 'cooperation',
          Icon: CooperationCTA,
          text: 'Співпраця',
        },
        {
          page: 'help',
          Icon: HelpCTA,
          text: 'Технічна допомога',
        },
        {
          page: 'support',
          Icon: SupportCTA,
          text: 'Підтримати' + '\n' + 'нас',
        },
        {
          page: 'info',
          Icon: InfoCTA,
          text: 'Право-\nвласникам',
        }
      ]}
    />

    <div className="flex-1 relative overflow-x-hidden" style={{ marginLeft: 132 }}>
      <Header
        onSearchChange={() => console.log('CHANGE')}
        onSearchFocus={() => console.log('FOCUS')}
        onThemeSwitch={() => console.log('THEME SWITCHING')}
      />
      {/**
        * COMPONENT ENTRY 
        */}
      <main className="mt-[80px] py-8 px-14">
        {children}
      </main>
    </div>

    {/**
     * Global style (scrollbar)
     */}
    <style jsx global>{`
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        background: #CC7F36;
      }
      
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #301818;
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


export default GlobalLayout;