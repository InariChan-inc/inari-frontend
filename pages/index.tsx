import Head from 'next/head'
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
        <div>
          
        </div>
      </GlobalLayout>
    </div>
  )
}
