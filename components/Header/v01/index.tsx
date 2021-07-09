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
    className="flex items-center justify-between py-4 px-16 border-b border-yellow-1 sticky top-0 left-0 right-0 before:absolute before:top-0 before:left-[-1px] before:bottom-0 before:w-[1px] before:bg-white"
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