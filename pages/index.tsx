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

const REQUEST = gql`
  query {
    userProfile {
      email, name
    }
  }
`;

import { GlobalLayout } from '../layouts';

export default function Home() {

  // const {loading, error, data} = useQuery(REQUEST);

  // if (!loading) {
  //   console.log(data.userProfile);
  // }

  return (
    <div>
      <Head>
        <title>Inari</title>
      </Head>

      <GlobalLayout>
        <ImageSlider />
        <AnimeSlider
          className="my-16"
          title="Останні додані аніме"
        />
        <AnimeSlider
          className="my-16"
          title="Топ місяця"
        />
        <AnimeSlider
          className="my-16"
          title="Всі аніме"
          slidesPerColumn={2}
        />
        <div className="w-full flex justify-center">
          <Button 
            bg="brown" 
            color="white" 
            className="px-7 py-3"
          >
            Більше аніме
          </Button>
        </div>
      </GlobalLayout>
    </div>
  )
}
