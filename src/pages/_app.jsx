import Layout from '@/components/Layout'
import { Space_Grotesk } from 'next/font/google'
import Head from 'next/head'
import { Loading } from '../components/Loading'
import '../styles/globals.scss'
import '../styles/style.scss'

export const spaceGrotesk = Space_Grotesk({
  weights: [400, 500, 600, 700],
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <main data-scroll-container className={spaceGrotesk.variable}>
      <Head>
        <meta charSet='UTF-8' name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/svg+xml' href='/favicon.png' />
        <title>Phuc Bui</title>
      </Head>
      <Loading />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

export default MyApp
