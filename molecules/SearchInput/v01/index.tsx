import { FunctionComponent, useCallback } from 'react';
import { Search } from '../../../atoms/icons';
import {
  Formik, FormikErrors
} from 'formik';
import { useDispatch } from 'react-redux';
import { setFocus } from '../../../redux/actions/headerSearch';

import _ from 'lodash';

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
        <div className="bg-yellow-1 py-2 px-11 rounded-tl-full rounded-br-full w-1/2 h-full flex items-center relative z-[9999]">
          <label className="flex flex-1 items-center">
            <Search className="text-brown-2 fill-current mr-3 cursor-pointer" />
            <input
              className="flex-1 outline-none bg-transparent font-montserrat placeholder-shown:font-light font-medium text-brown-2 italic text-14 tracking-3p leading-none placeholder-yellow-6"
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
          </label>
        </div>
      );
    }}
  </Formik>
);

export default SearchInput;