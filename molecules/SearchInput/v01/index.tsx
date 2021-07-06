import { FunctionComponent } from 'react';
import { SearchCTA } from '../../../atoms';

interface SearchInputProps {
    placeholder: string,
    onFocus: () => void,
    onChange: () => void,
}

const SearchInput: FunctionComponent<SearchInputProps> = props => (
    <div className="bg-yellow-1 py-3 px-12 rounded-tl-full rounded-br-full">
        <label className="flex items-center">
            <SearchCTA className="text-brown fill-current mr-3" />
            <input
                className="outline-none bg-transparent font-montserrat font-light italic text-14 tracking-3p leading-none text-yellow-6 placeholder-yellow-6"
                type="text"
                {...props}
            />
        </label>
    </div>
);

export default SearchInput;