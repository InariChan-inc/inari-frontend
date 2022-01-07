import {
  useState,
  useEffect
} from 'react';
import {
  useAutocomplete
} from '@mui/material';
import { Helmet } from '@atoms';
import {
  AutocompleteSelect,
  Select,
} from '@molecules';
import {
  FilterButton,
  SearchContainer,
  SortSelect,
  UpControllerWrapper,
  ContentWrapper,
  FiltersWrapper,
  GridWrapper
} from '@components/pages/search';
import useSelect from '@hooks/useSelect';


export default function Search() {

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [animeType, handleAnimeTypeChange] = useSelect('');
  const [animeStatus, handleAnimeStatusChange] = useSelect('');
  const [season, handleSeasonChange] = useSelect('');

  const [options, setOptions] = useState(['Fantasy', 'Shonen', 'Isekai', 'Hentai']);
  const [genresOptions, setGenresOptions] = useState(options);
  const [notIncludedGenresOptions, setNotIncludedGenresOptions] = useState(options);

  const genreAutocompleteProps = useAutocomplete({
    id: 'autocomplete-genre-filter',
    options: genresOptions,
    multiple: true
  });

  const notIncludedGenreAutocompleteProps = useAutocomplete({
    id: 'autocomplete-not-included-genre-filter',
    options: notIncludedGenresOptions,
    multiple: true
  });

  useEffect(() => {
    setNotIncludedGenresOptions(options.filter((option) => !genreAutocompleteProps.value.includes(option)));  
  }, [genreAutocompleteProps.value]);

  useEffect(() => {
    setGenresOptions(options.filter((option) => !notIncludedGenreAutocompleteProps.value.includes(option)));
  }, [notIncludedGenreAutocompleteProps.value]);

  return (
    <SearchContainer>
      <Helmet title="Пошук" />
      <UpControllerWrapper>
        <SortSelect
          onChange={(sortItem) => {
            console.log(sortItem);
          }}
        />
        <FilterButton
          open={isFilterOpen} 
          onToggle={() => {
            setIsFilterOpen((prev) => !prev);
          }}
        />
      </UpControllerWrapper>
      <ContentWrapper>
        <GridWrapper isFilterOpen={isFilterOpen}>
        </GridWrapper>

        <FiltersWrapper open={isFilterOpen}>
          <AutocompleteSelect
            {...genreAutocompleteProps}
            id="autocomplete-genre-filter"
            label="Жанри"
            disabled={genreAutocompleteProps.value.length === 3}
          />
          <AutocompleteSelect
            {...notIncludedGenreAutocompleteProps}
            id="autocomplete-not-included-genre-filter"
            label="Не включати"
            disabled={notIncludedGenreAutocompleteProps.value.length === 3}
          />
          <Select
            id="select-anime-type"
            label="Тип аніме"
            options={['1st type', '2nd type', '3rd type']}
            value={animeType}
            onChange={handleAnimeTypeChange}
          />
          <Select
            id="select-anime-status"
            label="Статус аніме"
            options={['1st status', '2nd status', '3rd status']}
            value={animeStatus}
            onChange={handleAnimeStatusChange}
          />
          <Select
            id="select-anime-season"
            label="Сезон"
            options={['1st season', '2nd season', '3rd season']}
            value={season}
            onChange={handleSeasonChange}
          />
        </FiltersWrapper>
      </ContentWrapper>
      
    </SearchContainer>
  );
}