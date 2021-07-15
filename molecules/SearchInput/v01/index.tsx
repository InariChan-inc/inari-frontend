import { FunctionComponent } from 'react';
import { Search } from '../../../atoms/icons';

interface SearchInputProps {
    placeholder: string,
    onFocus: () => void,
    onChange: () => void,
}

const SearchInput: FunctionComponent<SearchInputProps> = props => (
    <div className="bg-yellow-1 py-2 px-11 rounded-tl-full rounded-br-full w-1/2 h-full flex items-center">
        <label className="flex flex-1 items-center">
            <Search className="text-brown-2 fill-current mr-3 cursor-pointer" />
            <input
                className="flex-1 outline-none bg-transparent font-montserrat placeholder-shown:font-light font-medium text-brown-2 italic text-14 tracking-3p leading-none placeholder-yellow-6"
                type="text"
                {...props}
            />
        </label>
    </div>
);

export default SearchInput;