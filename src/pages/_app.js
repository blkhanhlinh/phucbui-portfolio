import Layout from '../components/layout';
import '../styles/globals.css'
import Head from 'next/head';
import { Space_Grotesk } from "@next/font/google";
require('../styles/style.css')
import UnderConstruction from '../components/under-construction';

export const spaceGrotesk = Space_Grotesk({
  weights: [400, 500, 600, 700],
  variable: '--space-grotesk-font',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <main data-scroll-container>
      <Head>
        <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <title>Phuc Bui</title>
      </Head>
      {/*<UnderConstruction />*/}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
