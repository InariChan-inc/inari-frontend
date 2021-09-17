import Head from "next/head";
import { FunctionComponent } from "react"

interface HelmetProps {
  title: string,
}

const Helmet: FunctionComponent<HelmetProps> = ({ title }) => (
  <Head>
    <title>Inari &#8211; {title}</title>
  </Head>
);


export default Helmet;
