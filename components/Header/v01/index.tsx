import {
  FunctionComponent,
} from "react";
import { useSelector } from "react-redux";
import { isFocused } from "../../../redux/selectors/headerSearch";

import { Sun } from '../../../atoms/icons';
import { SearchInput } from '../../../molecules';
import { Authorization } from '../../../organizms';

interface HeaderProps {
}

const Header: FunctionComponent<HeaderProps> = ({
}) => {
  const isSearchFocused = useSelector(isFocused);

  return (
    <div 
      className={`fixed top-0 ${isSearchFocused ? 'right-[10px]' : 'right-0'} left-[132px] z-[5001] h-[80px] flex items-center justify-between py-4 px-[60px] bg-white border-b border-yellow-1 before:absolute before:top-0 before:left-[-1px] before:bottom-0 before:w-[1px] before:bg-white`}>
        <SearchInput 
            placeholder="Шукаю аніме..."
            onSearch={searchValue => console.log('SEARCH: ', searchValue)}
            onSubmit={searchValue => console.log('SUBMITTED: ', searchValue)}
        />
        
        <div className="flex items-center">
          <Sun 
            size={36}
            className="text-brown-2 dark:text-white fill-current cursor-pointer mr-8" 
            onClick={() => console.log('Theme switched!')}
          />
          <Authorization />
        </div>
        <div className={`duration-300 fixed z-[9998] top-0 left-0 right-0 bottom-0 bg-black opacity-60 ${isSearchFocused ? 'visible' : 'opacity-0 invisible'}`} />
    </div>
  );
};


export default Header;