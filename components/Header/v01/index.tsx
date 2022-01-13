import {
  FunctionComponent,
  useCallback
} from "react";
import { useSelector } from "react-redux";
import { isFocused } from "@r/selectors/headerSearch";
import { isUserLoggedIn } from "@r/selectors/token";
import { isUserEmpty } from "@r/selectors/user";
import {
  Authorization,
  AccountControl,
  SearchInput,
} from '../../../organizms';
import { useRouter } from "next/router";
import {
  BlackScreen,
  HeaderContainer,
} from './styles';


interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {

  const router = useRouter();

  const isSearchFocused = useSelector(isFocused);
  const isLoggedIn = useSelector(isUserLoggedIn);
  const isEmpty = useSelector(isUserEmpty);

  const render = () => {
    return isLoggedIn ? <AccountControl /> : <Authorization />;
  }

  const UserComponent = useCallback(render, [isLoggedIn, isEmpty, router.isReady]);


  return (
    <HeaderContainer>
        <SearchInput 
            placeholder="Шукаю аніме..."
            onSearch={searchValue => console.log('SEARCH: ', searchValue)}
            onSubmit={searchValue => console.log('SUBMITTED: ', searchValue)}
        />  
        <UserComponent />
        <BlackScreen open={isSearchFocused} />
    </HeaderContainer>
  );
};


export default Header;