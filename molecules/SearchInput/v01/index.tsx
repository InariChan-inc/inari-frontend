import { FunctionComponent } from 'react';
import { SearchCTA } from '../../../atoms';

interface SearchInputProps {
    placeholder: string,
    onFocus: () => void,
    onChange: () => void,
}

const SearchInput: FunctionComponent<SearchInputProps> = props => (
    <div className="bg-yellow-1 py-2 px-11 rounded-tl-full rounded-br-full w-1/2 h-full flex items-center">
        <label className="flex items-center">
            <SearchCTA className="text-brown fill-current mr-3 cursor-pointer" />
            <input
                className="outline-none bg-transparent font-montserrat font-light italic text-14 tracking-3p leading-none text-yellow-6 placeholder-yellow-6"
                type="text"
                {...props}
            />
        </label>
    </div>
);

export default SearchInput;