import Head from 'next/head';

import {
  ImageSlider,
  AnimeSlider,
} from '../components';

import {
  Button
} from '../molecules';

import {
  useQuery,
  gql,
} from '@apollo/client';

import {
  Link
} from '../atoms';

export default function Home() {

  const {data} = useQuery<{baners: {image: {path: string}}[]}>(gql`
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

        <ImageSlider
          urls={data && data.baners.map(item => `${process.env.HOST}/${item.image.path}`)}
        />
        <AnimeSlider
          className="my-16"
          title="Топ місяця"
        />
        <AnimeSlider
          className="my-16"
          title="Нещодавно оновлені"
        />
        <AnimeSlider
          className="my-16"
          title="Останні додані"
          slidesPerColumn={2}
        />
        <div className="w-full flex justify-center">
          <Link href="search">
            <Button
              className="px-7 py-3"
            >
              Перейти до пошуку
            </Button>
          </Link>
        </div>
    </div>
  )
}
