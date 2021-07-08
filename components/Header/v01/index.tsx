import { FunctionComponent } from "react";
import { SunCTA } from '../../../atoms';
import { SearchInput } from '../../../molecules';
import { Authorization } from '../../../organizms';

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
  <div 
    className="flex items-center justify-between py-4 px-16 border-b-2 border-yellow-1"
    style={{
      height: 80,
    }}>
      <SearchInput 
          placeholder="Шукаю аніме..."
          onChange={onSearchChange}
          onFocus={onSearchFocus}
      />
      
      <div className="flex items-center">
        <SunCTA 
          size={36}
          className="text-brown-2 dark:text-white fill-current cursor-pointer mr-8" 
          onClick={onThemeSwitch}
        />
        <Authorization />
      </div>
  </div>
);


export default Header;