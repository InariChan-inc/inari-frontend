import {
  FunctionComponent,
  useCallback
} from "react";
import { useSelector } from "react-redux";
import { isFocused } from "../../../redux/selectors/headerSearch";
import { isUserLoggedIn } from "../../../redux/selectors/token";
import { isUserEmpty } from "../../../redux/selectors/user";
import { SearchInput } from '../../../molecules';
import {
  Authorization,
  AccountControl
} from '../../../organizms';
import { useRouter } from "next/router";

interface HeaderProps {
}

const Header: FunctionComponent<HeaderProps> = ({
}) => {

  const router = useRouter();

  const isSearchFocused = useSelector(isFocused);
  const isLoggedIn = useSelector(isUserLoggedIn);
  const isEmpty = useSelector(isUserEmpty);

  const render = () => {
    return isLoggedIn ? <AccountControl /> : <Authorization />;
  }

  const UserComponent = useCallback(render, [isLoggedIn, isEmpty, router.isReady]);


  return (
    <div
      className={`fixed top-0 right-0 left-[132px] z-[5001] h-20 flex items-center justify-between px-[60px] bg-white border-b border-yellow-1 before:absolute before:top-0 before:left-[-1px] before:bottom-0 before:w-[1px] before:bg-white`}>
        <SearchInput 
            placeholder="Шукаю аніме..."
            onSearch={searchValue => console.log('SEARCH: ', searchValue)}
            onSubmit={searchValue => console.log('SUBMITTED: ', searchValue)}
        />
        
        <UserComponent />
        
        <div className={`duration-300 fixed z-[9998] top-0 left-0 right-0 bottom-0 bg-black opacity-60 ${isSearchFocused ? 'visible' : 'opacity-0 invisible'}`} />
    </div>
  );
};


export default Header;