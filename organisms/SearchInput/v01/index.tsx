import router from 'next/router';
import {
  FunctionComponent,
  useCallback,
  useRef,
  useEffect
} from 'react';
import _ from 'lodash';
import { Formik } from 'formik';
import { 
  useDispatch, 
  useSelector
} from 'react-redux';
import { Headline } from '@typography';
import { setFocus } from '@r/actions/headerSearch';
import { isFocused } from '@r/selectors/headerSearch';
import { NoResultsImage } from '@atoms';
import { Search } from '@atoms/icons';
import {
  AnimeRow,
  AnimeRowProps,
  Button,
} from '@molecules';
import {
  FieldWrapper,
  SearchInputContainer,
  Label,
  StyledInput,
  PropositionsContainer,
  OfferedAnimesWrapper,
  AllResultsButtonWrapper,
  ControlsWrapper,
  GoToSearchIcon,
  CloseIcon,
  LoaderWrapper,
  Loader,
  NoResultsWrapper,
  NoResultsTextWrapper,
  NoResultsBodyText,
  PSText,
  GoToSearchLink,
} from './styles';

interface SearchInputProps {
    placeholder: string;
    proposals?: AnimeRowProps[];
    isLoading: boolean;
    onSearch: (searchValue: string) => void;
    onSubmit: (searchValue: string) => void;
    onClear: () => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({
  placeholder,
  proposals,
  isLoading,
  onSearch,
  onSubmit,
  onClear,
}) => {

  const isSearchFocused = useSelector(isFocused);

  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={({ search }) => onSearch(search)}
    >
      {({
        values: { search = '' },
        handleChange,
        submitForm,
        resetForm,
        setFieldValue
      }) => {
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
          const clearSearchInput = (url: string) => {
            if (!url.includes('/search')) {
              resetForm();
              onClear();
            }
          };

          const setSearchValue = (url: string) => {
            if (url.includes('/search')) {
              setFieldValue('search', router.query.name); 
            }
          }

          router.events.on('beforeHistoryChange', clearSearchInput);
          router.events.on('routeChangeComplete', setSearchValue);

          return () => {
            router.events.off('beforeHistoryChange', clearSearchInput);
            router.events.off('routeChangeComplete', setSearchValue);
          }
        }, []);

        const debouncedSubmitForm = useCallback(_.debounce(submitForm, 1000), []);

        const dispatch = useDispatch();

        return (
          <SearchInputContainer>
            <FieldWrapper>
              <Label>
                <Search
                  color="yellow-5"
                  style={{ marginRight: 12 }}
                />
                <StyledInput
                  ref={inputRef}
                  autoComplete="off"
                  name="search"
                  type="text"
                  value={search}
                  placeholder={placeholder}
                  onChange={(event) => {
                    if (/^[A-Z\d\sАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯЫЭЪ.,!:?"'\/$]*$/gi.test(event.target.value) || event.target.value === '') {
                      handleChange(event)
                      debouncedSubmitForm()
                    }
                  }}
                  onFocus={() => {
                    dispatch(setFocus(true));
                    onSearch(search);
                  }}
                  onBlur={() => dispatch(setFocus(false))}
                  onKeyDown={event => {
                    if (event.key === 'Enter') {
                      onSubmit(search);
                      inputRef.current?.blur();
                      setFocus(false);
                    }
                    if (event.key === 'Escape') {
                      inputRef.current?.blur();
                      setFocus(false);
                    }
                  }}
                />
                <ControlsWrapper>
                  <CloseIcon
                    visible={!!search?.length}
                    onClick={() => {
                      resetForm();
                      onClear();
                    }}
                  />
                  <GoToSearchIcon
                    visible={!!search?.length}
                    onClick={(event) => {
                      event.preventDefault();
                      onSubmit(search);
                    }}
                  />
                </ControlsWrapper>
              </Label>
            </FieldWrapper>
            <PropositionsContainer $visible={isSearchFocused && search.length >= 3 && !!proposals?.length} isResult={isLoading || !!proposals?.length}>
              {isLoading ? (
                <LoaderWrapper>
                  <Loader />
                </LoaderWrapper>
              ) : proposals === undefined ? null : proposals.length ? (
                  <>
                    <OfferedAnimesWrapper>
                      {proposals.map((anime) => (
                        <AnimeRow
                          key={anime.id}
                          {...anime}
                        />
                      ))}
                    </OfferedAnimesWrapper>
                    <AllResultsButtonWrapper>
                      <Button
                        type={1}
                        onClick={() => onSubmit(search)}
                      >
                        Показати всі результати {` (${proposals.length})`}
                      </Button>
                    </AllResultsButtonWrapper>
                  </>
              ): (
                <>
                <NoResultsWrapper>
                  <NoResultsImage width={115} height={146} />
                  <NoResultsTextWrapper>
                    <Headline type={3}>Прикра новина!</Headline>
                    <NoResultsBodyText type>По вашому запиту ми нічого не знайшли.</NoResultsBodyText>
                    <NoResultsBodyText>Ми хочемо допомогти вам з пошуком, тому перевірте, будь ласка, ваш текст на наявність помилок і/або мову розкладки чи спробуйте ввести щось інше.</NoResultsBodyText>
                    <PSText>P.S.: Ви можете перейти в <GoToSearchLink onClick={() => onSubmit(search)}>розширенний пошук</GoToSearchLink> і спробувати знайти бажане.</PSText>
                  </NoResultsTextWrapper>
                </NoResultsWrapper>
                </>
              )}
              
            </PropositionsContainer>
          </SearchInputContainer>
        );
      }}
    </Formik>
  );
};

export default SearchInput;