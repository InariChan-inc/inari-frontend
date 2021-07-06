import { FunctionComponent } from "react";
import { SunCTA } from '../../../atoms';
import { SearchInput } from '../../../molecules';

interface HeaderProps {
    onSearchFocus: () => void,
    onSearchChange: () => void,
}

const Header: FunctionComponent<HeaderProps> = ({
    onSearchChange,
    onSearchFocus,
}) => (
  <div className="flex items-center justify-between py-3 px-16 border-b-2 border-yellow-1">
      <SearchInput 
          placeholder="Шукаю аніме..."
          onChange={onSearchChange}
          onFocus={onSearchFocus}
      />
      
      <div>
        <SunCTA className="text-brown dark:text-white fill-current" />
      </div>
  </div>
);


export default Header;