import { FunctionComponent } from "react";
import { SunCTA } from '../../../atoms';
import { SearchInput } from '../../../molecules';

interface HeaderProps {
    onSearchFocus: () => void,
    onSearchChange: () => void,
    onThemeSwitch: () => void,
}

const Header: FunctionComponent<HeaderProps> = ({
    onSearchChange,
    onSearchFocus,
    onThemeSwitch,
}) => (
  <div className="flex items-center justify-between py-3 px-16 border-b-2 border-yellow-1">
      <SearchInput 
          placeholder="Шукаю аніме..."
          onChange={onSearchChange}
          onFocus={onSearchFocus}
      />
      
      <div>
        <SunCTA 
          className="text-brown dark:text-white fill-current cursor-pointer" 
          onClick={onThemeSwitch}
        />
      </div>
  </div>
);


export default Header;