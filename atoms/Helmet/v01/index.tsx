import {
  FunctionComponent,
  useRef,
} from "react"
import Head from "next/head";

interface HelmetProps {
  title: string | string[],
}

const Helmet: FunctionComponent<HelmetProps> = ({ title }) => {

  return (
    <Head>
      <title>Inari {typeof title === 'string' 
        ? `— ${title}`
        : title.map(i => `— ${i}`).join(' ')}</title>
    </Head>
  );
};


export default Helmet;
