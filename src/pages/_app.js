import Layout from '../components/layout';
import '../styles/globals.css'
import Head from 'next/head';
import { Space_Grotesk } from "@next/font/google";

export const spaceGrotesk = Space_Grotesk({
  weights: [400, 500, 600, 700],
  variable: '--space-grotesk-font',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <title>Phuc Bui</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
