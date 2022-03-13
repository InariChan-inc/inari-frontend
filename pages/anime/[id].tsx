import { useRouter } from 'next/router';
import { useState } from 'react';
import { Grid } from '@mui/material';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import { Body } from '@typography';
import {
  Helmet,
  GridOffset,
} from '@atoms';
import { Breadcrumb } from '@molecules';
import {
  AnimeContainer,
  AnimePoster,
  RRateWrapper,
  ChipsWrapper,
  RChip,
  GenreChip,
  Title,
  Description,
  ReadMoreButton,
} from '@components/pages/anime';
import mok_poster from '@public/mok_poster.png';

const ResponsiveEllipsis = responsiveHOC(0)(LinesEllipsis);
const description = "В третьому столітті до нашої ери, в епоху воюючих королівств, коли Китай був розділений на невеликі держави, які вели нескінченну і багатовікову боротьбу між собою. На кордонах держави Цінь ростуть сироти Шен і Пяо, чиїх батьків забрала чергова війна. Вони кожного дня тренувалися, щоб одного разу здійснити свою заповітну мрію - стати генералами піднебесної. Пяо неймовірно схожий на імператора Цінь і його вирішують відвезти до палацу, як двійника, однак через місяць відбувається переворот і Пяо, смертельно поранили думаючи, що це імператор, але він встигає дістатися до Шена і перед смертю просить його дістатися до бандитського містечка, Шен виконує його волю і зустрічає там наймолодшого Імератора, що втратив трон. Спочатку Шен ненавидить хлопця через Пяо і вирішує вбити, але пізніше побачивши прекрасну можливість здійснення мрії стати генералом, погоджується супроводжувати його і допомогти влаштувати переворот.";

export default function Anime() {
  const router = useRouter();
  const { id } = router.query;

  const [isFullDescription, setIsFullDescription] = useState(false);

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
        <Grid item xs={6}>
          <RRateWrapper>
            <RChip age={17} />
          </RRateWrapper>
            <ChipsWrapper>
              {['Бойовик', 'Політика', 'Буденність', 'Надприродне'].map((genre) => (
                <GenreChip key={genre}>{ genre }</GenreChip>
              ))}
            </ChipsWrapper>
            <Title type={2} color="brown-2">Найсильніший мудрець непридатної емблеми</Title>
            <Title type={4} color="brown-1">Shikkakumon no Saikyou Kenja (2022)</Title>
            <Description>
              {isFullDescription ? (
                <Body type={1} color="brown-2">
                  {description}
                </Body>
              ) : (
                <ResponsiveEllipsis 
                  text={description}
                  maxLine="7"
                  ellipsis="..."
                  trimRight
                  basedOn="words"
                />
              )}
              
              <ReadMoreButton 
                type={2} 
                color="brown-1"
                onClick={() => {
                  setIsFullDescription(prev => !prev);
                }}
              >
                {isFullDescription ? 'зменшити' : 'читати більше'}
              </ReadMoreButton>
            </Description>
        </Grid>
        <GridOffset xs={1} />
      </Grid>
    </AnimeContainer>
  );
}