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

import { Header } from '../organizms';

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
      
      <Header 
        onSearchChange={() => console.log('CHANGE')}
        onSearchFocus={() => console.log('FOCUS')}
      />
    </div>
  )
}
