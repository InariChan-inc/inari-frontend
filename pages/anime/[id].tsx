import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import {
  Helmet,
  GridOffset,
} from '@atoms';
import { Breadcrumb } from '@molecules';
import {
  AnimeContainer,
  AnimePoster,
  AnimeDataWrapper,
  ChipsWrapper,
  RChip,
  GenreChip,
} from '@components/pages/anime';
import mok_poster from '@public/mok_poster.png';

export default function Anime() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AnimeContainer>
      <Helmet title={`Аніме "${id}"`} />
      <Breadcrumb
        crumbs={[
          {
            name: 'Головна',
            to: '/'
          },
          {
            name: `${id}`,
            to: `/anime/${id}`
          }
        ]}
      />
      <Grid columnSpacing={4} container marginTop="30px">
        <Grid item
          xs={2}
          minWidth="255px"
          minHeight="370px"
        >
          <AnimePoster imageUrl={mok_poster.src} />
        </Grid>
        <Grid item xs={5}>
          <AnimeDataWrapper>
            <ChipsWrapper>
              <RChip age={17} />
              {['Бойовик', 'Політика', 'Буденність', 'Надприродне'].map((genre) => (
                <GenreChip key={genre}>{ genre }</GenreChip>
              ))}
            </ChipsWrapper>
          </AnimeDataWrapper>
        </Grid>
        <GridOffset xs={1} />
      </Grid>
    </AnimeContainer>
  );
}