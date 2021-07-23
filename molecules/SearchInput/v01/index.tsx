import { FunctionComponent, useCallback } from 'react';
import { Search } from '../../../atoms/icons';
import {
  Formik, FormikErrors
} from 'formik';
import _ from 'lodash';

interface SearchInputProps {
    placeholder: string,
    onFocus: () => void,
    onChange: () => void,
}

const SearchInput: FunctionComponent<SearchInputProps> = props => (
  <Formik
    initialValues={{ search: '' }}
    onSubmit={({ search }) => {
      console.log('SEARCH:', search.trim())
    }}
  >
    {({
      values: { search },
      handleChange,
      submitForm      
    }) => {
      const debouncedSubmitForm = useCallback(_.debounce(submitForm, 1000), []);

      return(
        <div className="bg-yellow-1 py-2 px-11 rounded-tl-full rounded-br-full w-1/2 h-full flex items-center">
          <label className="flex flex-1 items-center">
            <Search className="text-brown-2 fill-current mr-3 cursor-pointer" />
            <input
              className="flex-1 outline-none bg-transparent font-montserrat placeholder-shown:font-light font-medium text-brown-2 italic text-14 tracking-3p leading-none placeholder-yellow-6"
              name="search"
              type="text"
              value={search}
              placeholder="Я шукаю аніме..."
              onChange={(event) => {
                if (/^[A-Z\d\sАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ.,!?"'\/$]*$/gi.test(event.target.value) || event.target.value === '') {
                  handleChange(event)
                  debouncedSubmitForm()
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