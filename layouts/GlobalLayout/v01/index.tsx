import { FunctionComponent } from "react";
import {
  SearchRounded, 
  Cooperation,
  Support,
  Help,
  Info,
} from '@icons';
import { 
  Header, 
  Menu,
} from '@components';
import {
  GlobalLayoutContainer,
  Main,
  RightSectionWrapper,
} from './styles';

import theme from '@theme';

const GlobalLayout: FunctionComponent = ({
    children,
}) => {
  return (
    <GlobalLayoutContainer>
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
        ]}
      />

      <RightSectionWrapper>
        <Header />
        {/* COMPONENT ENTRY */}
        <Main id="main">
          {children}
        </Main>
      </RightSectionWrapper>

      {/* Global style (scrollbar) */}
      <style jsx global>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        html {
          scrollbar-color: ${theme.colors['brown-2']} ${theme.colors['yellow-5']};
          scrollbar-width: 10px;
        }

        /* width */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
          background-color: ${theme.colors['yellow-5']};
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: ${theme.colors['brown-2']};
          border-radius: 10px;
        }
        
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: ${theme.colors.black};
        }

        a {
          text-decoration: none;
        }

        a, a:visited, a:hover, a:active {
         color: inherit;
        }

        input, button {
          border: none;
        }

        button {
          cursor: pointer;
        }

        ::-moz-selection {
          background: ${theme.colors['brown-1']};
          color: ${theme.colors.white}; 
        }

        ::selection {
          background: ${theme.colors['brown-1']};
          color: ${theme.colors.white};
        }
      `}
      </style>
    </GlobalLayoutContainer>
  );
};


export default GlobalLayout;