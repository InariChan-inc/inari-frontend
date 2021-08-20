import Head from 'next/head';
import {
  ImageSlider,
  AnimeSlider,
} from '../components';
import {
  Button,
  AnimeCardProps
} from '../molecules';
import {
  useQuery,
  gql,
} from '@apollo/client';
import {
  Link
} from '../atoms';


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
  } = useQuery<{baners: {image: {path: string}}[]}>(
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
    <div className="py-8 px-[60px]">
      <Head>
        <title>Inari - Головна</title>
      </Head>

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
              className="my-16"
              title="Топ місяця"
              animes={topAnimeMonthData.topAnimeMonth}
            />
          ) : null
        }       
        
        {
          !lastUpdatedAnimeLoading && !lastUpdatedAnimeError && lastUpdatedAnimeData && lastUpdatedAnimeData.lastUpdatedAnime.length ? (
            <AnimeSlider
              className="my-16"
              title="Нещодавно оновлені"
              animes={lastUpdatedAnimeData.lastUpdatedAnime}
            /> 
          ) : null
        }

        {
          !lastAddedAnimeLoading && !lastAddedAnimeError && lastUpdatedAnimeData && lastAddedAnimeData.lastAddedAnime.length ? (
            <AnimeSlider
              className="mt-16"
              title="Останні додані"
              slidesPerColumn={2}
              animes={lastAddedAnimeData.lastAddedAnime}
            />
          ) : null
        }

       <div className="w-full flex justify-center mt-16">
          <Link href="search">
            <Button className="px-[30px] py-[15px] rounded-[50px]">
              Перейти до пошуку
            </Button>
          </Link>
        </div>
    </div>
  )
}
