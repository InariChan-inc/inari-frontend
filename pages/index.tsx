import styled from 'styled-components';
import {
  ImageSlider,
  AnimeSlider,
} from '@components';
import {
  Button,
  AnimeCardProps
} from '@molecules';
import {
  useQuery,
  gql,
} from '@apollo/client';
import {
  Link,
  Helmet,
} from '@atoms';

const HomeContainer = styled.div`
  padding: 32px 60px;
`;

const GoToSearchButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
  width: 100%;
`;

export default function Home() {

  const { 
    data: topAnimeMonthData,
    loading: topAnimeMonthLoading,
    error: topAnimeMonthError
  } = useQuery<{ topAnimeMonth: AnimeCardProps[] }>(
    gql`
      {
        topAnimeMonth {
          id
          name
          poster {
            path
            pathResized
          }
          currentCountEpisodes
          countEpisodes
          format
        }
      }
  `);

  const {
    data: lastUpdatedAnimeData,
    loading: lastUpdatedAnimeLoading,
    error: lastUpdatedAnimeError
  } = useQuery<{ lastUpdatedAnime: AnimeCardProps[] }>(
    gql`
      {
        lastUpdatedAnime {
          id
          name
          poster {
            path
            pathResized
          }
          currentCountEpisodes
          countEpisodes
          format
        }
      }
  `);

  const {
    data: lastAddedAnimeData,
    loading: lastAddedAnimeLoading,
    error: lastAddedAnimeError
  } = useQuery<{ lastAddedAnime: AnimeCardProps[] }>(
    gql`
      {
        lastAddedAnime {
          id
          name
          poster {
            path
            pathResized
          }
          currentCountEpisodes
          countEpisodes
          format
        }
      }
  `);

  const { 
    data: bannerData, 
    loading: bannerLoading,
    error: bannerError
  } = useQuery<{ baners: {image: { path: string } }[] }>(
    gql`
      {
        baners {
          image {
            path
          }
        }
      }
  `);

  return (
    <HomeContainer>
      <Helmet title="Головна" />
      
      {
        !bannerLoading && !bannerError && bannerData && bannerData.baners.length ? (
          <ImageSlider
            urls={bannerData.baners.map(item => item.image.path)}
          />
        ) : null
      }
      
      {
        !topAnimeMonthLoading && !topAnimeMonthError && topAnimeMonthData && topAnimeMonthData.topAnimeMonth.length ? (
          <AnimeSlider
            style={{
              margin: '64px 0',
            }}
            title="Топ місяця"
            animes={topAnimeMonthData.topAnimeMonth}
          />
        ) : null
      }       
        
      {
        !lastUpdatedAnimeLoading && !lastUpdatedAnimeError && lastUpdatedAnimeData && lastUpdatedAnimeData.lastUpdatedAnime.length ? (
          <AnimeSlider
            style={{
              margin: '64px 0',
            }}
            title="Нещодавно оновлені"
            animes={lastUpdatedAnimeData.lastUpdatedAnime}
          /> 
        ) : null
      }

      {
        !lastAddedAnimeLoading && !lastAddedAnimeError && lastUpdatedAnimeData && lastAddedAnimeData.lastAddedAnime.length ? (
          <AnimeSlider
            style={{
              marginTop: 64,
            }}
            title="Останні додані"
            slidesPerColumn={2}
            animes={lastAddedAnimeData.lastAddedAnime}
          />
        ) : null
      }

      <GoToSearchButtonWrapper>
        <Link href="search">
          <Button 
            style={{
              padding: '15px 30px',
              borderRadius: 50,
            }}
          >
            Перейти до пошуку
          </Button>
        </Link>
      </GoToSearchButtonWrapper>
    </HomeContainer>
  )
}
