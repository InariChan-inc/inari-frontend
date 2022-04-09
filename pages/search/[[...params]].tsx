import {
  useState,
  useEffect,
} from 'react';
import { useQuery, gql } from '@apollo/client';
import {
  Grid,
  useAutocomplete,
} from '@mui/material';
import { AnimeSeason } from '@common/graphql/interfaces';
import { Body } from '@typography';
import { Helmet } from '@atoms';
import {
  AutocompleteSelect,
  AnimeCard,
  AnimeCardProps,
  Select,
  Button,
  Slider,
  NoResults,
  ISelectOption,
} from '@molecules';
import {
  FilterButton,
  FilterTitle,
  FilterSwitch,
  SearchContainer,
  SortSelect,
  UpControllerWrapper,
  ContentWrapper,
  FiltersWrapper,
  GridWrapper,
  ButtonsWrapper,
  FilterSwitchesWrapper,
} from '@components/pages/search';
import useSelect from '@hooks/useSelect';
import animeCardMock from '../../ANIME_CARD_MOCK.json';


const animeSeasonOption: ISelectOption[] = [
  {
    value: AnimeSeason.WINTER,
    label: 'Зима',
  },
  {
    value: AnimeSeason.SPRING,
    label: 'Весна'
  },
  {
    value: AnimeSeason.SUMMER,
    label: 'Літо'
  },
  {
    value: AnimeSeason.FALL,
    label: 'Осінь'
  },
  {
    value: AnimeSeason.NO_SEASON,
    label: 'Без сезону'
  }
];

const GET_GENRES = gql`{ genres { name } }`;

const SliderLabel = (value: number) => (
  <Body type={5}>{value}</Body>
);

export default function Search() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const {
    value: animeType,
    handleValueChange: handleAnimeTypeChange,
    handleValueClear: handleAnimeTypeClear
  } = useSelect();
  const {
    value: animeStatus,
    handleValueChange: handleAnimeStatusChange,
    handleValueClear: handleAnimeStatusClear
  } = useSelect();
  const {
    value: season,
    handleValueChange: handleSeasonChange,
    handleValueClear: handleSeasonClear
  } = useSelect();

  const genres = useQuery<{ genres: { name: string }[] }>(GET_GENRES);

  const [genresOptions, setGenresOptions] = useState<string[]>([]);

  useEffect(() => {
    if (!genres.loading) {
      setGenresOptions(genres.data.genres.map(({ name }) => name) || []);
    }
  }, [genres]);


  const [includedGenresOptions, setIncludedGenresOptions] = useState<string[]>([]);
  // const [notIncludedGenresOptions, setNotIncludedGenresOptions] = useState<string[]>([]);
  const [episodesAmount, setEpisodesAmount] = useState<number[]>([1, 24]);
  const [years, setYears] = useState<number[]>([2001, 2022]);
  const [onlyWithVideo, setOnlyWithWideo] = useState(false);
  const [withSubtitles, setWithSubtitles] = useState(false);

  const [genreInputValue, setGenreInputValue] = useState('');

  const includedGenreAutocompleteProps = useAutocomplete({
    id: 'autocomplete-genre-filter',
    options: includedGenresOptions,
    multiple: true,
    onInputChange: (_, value) => {
      setGenreInputValue(value);
    }
  });

  // const [notIncludedGenreInputValue, setNotIncludedGenreInputValue] = useState('');

  // const notIncludedGenreAutocompleteProps = useAutocomplete({
  //   id: 'autocomplete-not-included-genre-filter',
  //   options: notIncludedGenresOptions,
  //   multiple: true,
  //   onInputChange: (_, value) => {
  //     setNotIncludedGenreInputValue(value);
  //   }
  // });

  useEffect(() => {
    includedGenreAutocompleteProps.getClearProps().onClick(undefined);
    // notIncludedGenreAutocompleteProps.getClearProps().onClick(undefined);
    setIncludedGenresOptions(genresOptions);
    // setNotIncludedGenresOptions(genresOptions);
  }, [genresOptions]);

  // useEffect(() => {
  //   if (!genres.loading) { 
  //     setNotIncludedGenresOptions(genresOptions.filter((option) => !includedGenreAutocompleteProps.value.includes(option)));
  //   }
  // }, [includedGenreAutocompleteProps.value]);

  // useEffect(() => {
  //   if (!genres.loading) {
  //     setIncludedGenresOptions(genresOptions.filter((option) => !notIncludedGenreAutocompleteProps.value.includes(option)));
  //   }
  // }, [notIncludedGenreAutocompleteProps.value]);

  const handleClearAll = () => {
    includedGenreAutocompleteProps.getClearProps().onClick(undefined);
    // notIncludedGenreAutocompleteProps.getClearProps().onClick(undefined);
    handleAnimeTypeClear();
    handleAnimeStatusClear();
    handleSeasonClear();
    setEpisodesAmount([1, 24]);
    setYears([2001, 2022]);
    setOnlyWithWideo(false);
    setWithSubtitles(false);
  }

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
          {true ? (
            <Grid container
              rowSpacing={2}
              columns={5}
              justifyContent="space-evenly">
              {(animeCardMock as AnimeCardProps[]).slice(0, 20).map((anime) => (
                <Grid key={anime.id} item xs={1} minWidth={265}>
                  <AnimeCard
                    {...anime}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <NoResults
              imageWidth={150}
              imageHeight={191.35}
            />
          )}
        </GridWrapper>

        <FiltersWrapper open={isFilterOpen}>
          {!genres.loading ? (
            <AutocompleteSelect
              {...includedGenreAutocompleteProps}
              id="autocomplete-genre-filter"
              label="Жанри"
              limit={3}
            />
          ) : null}

          {/* <AutocompleteSelect
            {...notIncludedGenreAutocompleteProps}
            id="autocomplete-not-included-genre-filter"
            label="Не включати"
            limit={3}
          /> */}
          {/* <Select
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
          /> */}
          <Select
            id="select-anime-season"
            label="Сезон"
            options={animeSeasonOption}
            value={season}
            onChange={handleSeasonChange}
          />

          {/* <FilterTitle
            title="Кількість серій"
            information="Lorem ipsum dolor sit amet"
          />

          <Slider
            min={1}
            max={24}
            value={episodesAmount}
            onChange={(_, value) => {
              setEpisodesAmount(value as number[]);
            }}
            valueLabelDisplay="on"
            valueLabelFormat={SliderLabel}
            disableSwap
          /> */}

          {/* <FilterTitle
            title="Рік виходу"
          />
          <Slider
            min={2001}
            max={2022}
            value={years}
            onChange={(_, value) => {
              setYears(value as number[]);
            }}
            valueLabelDisplay="on"
            valueLabelFormat={SliderLabel}
            disableSwap
          /> */}

          {/* <FilterSwitchesWrapper>
            <FilterSwitch
              id="switch-only-with-video"
              title="Тільки з відео"
              information="Lorem ipsum dolor sit amet"
              checked={onlyWithVideo}
              onChange={() => {
                setOnlyWithWideo(prev => !prev);
              }}
            />
            <FilterSwitch
              id="switch-with-subtitles"
              title="З субтитрами"
              information="Lorem ipsum dolor sit amet"
              checked={withSubtitles}
              onChange={() => {
                setWithSubtitles(prev => !prev);
              }}
            />
          </FilterSwitchesWrapper> */}

          <ButtonsWrapper>
            <Button
              type={1}
              padding="15px 0"
              margin="0 0 15px"
            >Шукати</Button>
            <Button
              type={2}
              padding="15px 0"
              onClick={handleClearAll}
            >Очистити фільтр</Button>
          </ButtonsWrapper>
        </FiltersWrapper>
      </ContentWrapper>

    </SearchContainer>
  );
}