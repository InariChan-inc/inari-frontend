import { useRouter } from 'next/router';
import {
  useState,
  useEffect,
} from 'react';
import { useQuery, gql } from '@apollo/client';
import {
  Grid,
  useAutocomplete,
} from '@mui/material';
import guest from '@common/graphql/guest';
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
import { generateSearchPath } from '@utils';
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
  const router = useRouter();

  const [animes, setAnimes] = useState<AnimeCardProps[]>([]);

  const genres = useQuery<{ genres: { name: string }[] }>(GET_GENRES);

  const [genresOptions, setGenresOptions] = useState<string[]>([]);

  useEffect(() => {
    if (!genres.loading) {
      setGenresOptions(genres.data.genres.map(({ name }) => name) || []);
    }
  }, [genres]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // const {
  //   value: animeType,
  //   handleValueChange: handleAnimeTypeChange,
  //   handleValueClear: handleAnimeTypeClear
  // } = useSelect();
  // const {
  //   value: animeStatus,
  //   handleValueChange: handleAnimeStatusChange,
  //   handleValueClear: handleAnimeStatusClear
  // } = useSelect();
  const {
    value: season,
    setValue: setSeason,
    handleValueChange: handleSeasonChange,
    handleValueClear: handleSeasonClear
  } = useSelect();

  const [includedGenresOptions, setIncludedGenresOptions] = useState<string[]>([]);
  const [notIncludedGenresOptions, setNotIncludedGenresOptions] = useState<string[]>([]);
  // const [episodesAmount, setEpisodesAmount] = useState<number[]>([1, 24]);
  // const [years, setYears] = useState<number[]>([2001, 2022]);
  // const [onlyWithVideo, setOnlyWithWideo] = useState(false);
  // const [withSubtitles, setWithSubtitles] = useState(false);

  const [includedGenresValue, setIncludedGenresValue] = useState<string[]>([]);

  const includedGenreAutocompleteProps = useAutocomplete({
    id: 'autocomplete-genre-filter',
    options: includedGenresOptions,
    multiple: true,
    value: includedGenresValue,
    onChange: (_, value) => {
      setIncludedGenresValue(value);
    }
  });

  const notIncludedGenreAutocompleteProps = useAutocomplete({
    id: 'autocomplete-not-included-genre-filter',
    options: notIncludedGenresOptions,
    multiple: true,
  });

  useEffect(() => {
    includedGenreAutocompleteProps.getClearProps().onClick(undefined);
    notIncludedGenreAutocompleteProps.getClearProps().onClick(undefined);
    setIncludedGenresOptions(genresOptions);
    setNotIncludedGenresOptions(genresOptions);
  }, [genresOptions]);

  useEffect(() => {
    if (!genres.loading) { 
      setNotIncludedGenresOptions(genresOptions.filter((option) => !includedGenreAutocompleteProps.value.includes(option)));
    }
  }, [includedGenreAutocompleteProps.value]);

  useEffect(() => {
    if (!genres.loading) {
      setIncludedGenresOptions(genresOptions.filter((option) => !notIncludedGenreAutocompleteProps.value.includes(option)));
    }
  }, [notIncludedGenreAutocompleteProps.value]);

  const handleClearAll = () => {
    includedGenreAutocompleteProps.getClearProps().onClick(undefined);
    notIncludedGenreAutocompleteProps.getClearProps().onClick(undefined);
    // handleAnimeTypeClear();
    // handleAnimeStatusClear();
    handleSeasonClear();
    // setEpisodesAmount([1, 24]);
    // setYears([2001, 2022]);
    // setOnlyWithWideo(false);
    // setWithSubtitles(false);
  }

  const handleSearchSubmit = () => {
    const { name } = router.query;
    router.push(
      generateSearchPath({
        name: name as string,
        season: season?.value,
        includedGenres: includedGenreAutocompleteProps.value
      }),
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    if (router.isReady) {
      const { name, season, includedGenres } = router.query;
      if ((season as string) in AnimeSeason) {
        setSeason(animeSeasonOption.find((option) => option.value === season) || null);
      }

      if (genresOptions?.length && includedGenres) {
        // console.log('includedGenres', (includedGenres as string).split(',').slice(0, 3));

        console.log('INCLUDED', (includedGenres as string)
                    .split(',')
                    .filter((genre) => genresOptions.includes(genre))
                    .slice(0, 3)
                    .map((genre) => `"${genre}"`)
                    .join(','));

        setIncludedGenresValue((includedGenres as string).split(',').filter((genre) => genresOptions.includes(genre)).slice(0, 3));
      }

      guest.query<{ animes: { data: AnimeCardProps[] } }>({
        query: gql`
          {
            animes(data: {
              filters: {
                searchParams: "${name || ''}"
                ${season ? `seasonParams: ${season}` : ''}
                ${genresOptions?.length && includedGenres ? 
                  `genreParams: [${
                    (includedGenres as string)
                    .split(',')
                    .filter((genre) => genresOptions.includes(genre))
                    .slice(0, 3)
                    .map((genre) => `"${genre}"`)
                    .join(',')
                  }]` 
                  : ''}
              }
              size: 1000
            }) {
              data {
                id
                name
                poster {
                  path
                  pathResized
                }
                format
                currentCountEpisodes
                countEpisodes
              }          
            }
          }
        `
      }).then((res) => {
        console.log('ANIMES', res.data.animes.data);
        setAnimes(res.data.animes.data);
      }).catch((err) => {
        console.log('ERROR', err);
      })
    }
  }, [router.isReady, router.query, genresOptions]);

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
            >
              {animes.map((anime) => (
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

          <AutocompleteSelect
            {...notIncludedGenreAutocompleteProps}
            id="autocomplete-not-included-genre-filter"
            label="Не включати"
            limit={3}
          />
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
              onClick={handleSearchSubmit}
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