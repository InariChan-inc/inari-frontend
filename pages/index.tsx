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

import { Logo } from '../atoms';

import {
  SearchInput
} from '../molecules';

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
      <Logo 
        width={50}
        height={50}
      />
      <SearchInput 
        placeholder="Шукаю аніме..." 
        onChange={() => console.log('CHANGE')}
        onFocus={() => console.log('FOCUS')}
      />
    </div>
  )
}
