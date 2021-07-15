import { FunctionComponent } from "react";
import { Sun } from '../../../atoms/icons';
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
    className="fixed top-0 right-0 left-[132px] z-[5001] h-[80px] flex items-center justify-between py-4 px-[60px] bg-white border-b border-yellow-1 before:absolute before:top-0 before:left-[-1px] before:bottom-0 before:w-[1px] before:bg-white">
      <SearchInput 
          placeholder="Шукаю аніме..."
          onChange={onSearchChange}
          onFocus={onSearchFocus}
      />
      
      <div className="flex items-center">
        <Sun 
          size={36}
          className="text-brown-2 dark:text-white fill-current cursor-pointer mr-8" 
          onClick={onThemeSwitch}
        />
        <Authorization />
      </div>
  </div>
);


export default Header;