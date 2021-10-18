import {
  FunctionComponent,
  useCallback
} from 'react';
import _ from 'lodash';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setFocus } from '@r/actions/headerSearch';
import { Search } from '@atoms/icons';
import {
  FieldWrapper,
  SearchInputContainer,
  Label,
  StyledInput,
} from './styles';


interface SearchInputProps {
    placeholder: string,
    onSearch: (searchValue: string) => void,
    onSubmit: (searchValue: string) => void,
}

const SearchInput: FunctionComponent<SearchInputProps> = ({
  placeholder,
  onSearch,
  onSubmit
}) => (
  <Formik
    initialValues={{ search: '' }}
    onSubmit={({ search }) => onSearch(search)}
  >
    {({
      values: { search },
      handleChange,
      submitForm      
    }) => {
      const debouncedSubmitForm = useCallback(_.debounce(submitForm, 1000), []);
      
      const dispatch = useDispatch();

      return(
        <SearchInputContainer>
          <FieldWrapper>
            <Label>
              <Search
                color="yellow-5"
                style={{ marginRight: 12 }}
              />
              <StyledInput
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
                onFocus={() => dispatch(setFocus(true))}
                onBlur={() => dispatch(setFocus(false))}
                onKeyDown={event => {
                  if (event.key === 'Enter') {
                    onSubmit(search)
                  }
                }}
              />
            </Label>
          </FieldWrapper>
        </SearchInputContainer>
      );
    }}
  </Formik>
);

export default SearchInput;