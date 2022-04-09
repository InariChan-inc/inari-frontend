import {
  VoidFunctionComponent,
  useCallback,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { gql } from "@apollo/client";
import client from "@common/graphql/client";
import { isFocused } from "@r/selectors/headerSearch";
import { isUserLoggedIn } from "@r/selectors/token";
import { isUserEmpty } from "@r/selectors/user";
import {
  Authorization,
  AccountControl,
  SearchInput,
} from '@organisms';
import { useRouter } from "next/router";
import {
  BlackScreen,
  HeaderContainer,
} from './styles';
import { AnimeRowProps } from "@molecules";
import { setTimeout } from "timers";
import { generateSearchPath } from '@utils';


interface HeaderProps {}

const Header: VoidFunctionComponent<HeaderProps> = () => {
  const router = useRouter();

  const isSearchFocused = useSelector(isFocused);
  const isLoggedIn = useSelector(isUserLoggedIn);
  const isEmpty = useSelector(isUserEmpty);

  const renderUserSide = () => {
    return isLoggedIn ? <AccountControl /> : <Authorization />;
  }
  const UserComponent = useCallback(renderUserSide, [isLoggedIn, isEmpty, router.isReady]);

  const [proposalsSearch, setProposalsSearch] = useState('');
  const [proposals, setProposals] = useState<AnimeRowProps[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <HeaderContainer>
        <SearchInput 
            placeholder="Шукаю аніме..."
            proposals={proposals}
            isLoading={loading}
            onSearch={searchValue => {
              if (searchValue?.length >= 3) {
                if (proposalsSearch !== searchValue) {
                  setLoading(true);
                  setProposalsSearch(searchValue);
                  client.query<{ animes: { data: AnimeRowProps[] } }>({
                    query: gql`
                    {
                      animes(data: {
                        filters: {
                          searchParams: "${searchValue || ''}"
                        }
                        size: 10
                      }) {
                        data {
                          id
                          name
                          poster {
                            id
                            path
                            pathResized
                          }
                          description
                          format
                          currentCountEpisodes
                          countEpisodes
                        }
                      }
                    }
                  `}).then((res) => {
                    setProposals(res.data.animes.data);

                    setTimeout(() => setLoading(false), 500);
                  });
                }
              } else {
                setProposals(undefined);
                setProposalsSearch('');
              }
            }}
            onSubmit={searchValue => {
              const { season, includedGenres } = router.query;
              router.push(generateSearchPath({ name: searchValue, season: season as string, includedGenres: includedGenres as string[] }), undefined, { shallow: true });
            }}
            onClear={() => {
              setProposals([]);
            }}
        />  
        <UserComponent />
        <BlackScreen open={isSearchFocused} />
    </HeaderContainer>
  );
};


export default Header;