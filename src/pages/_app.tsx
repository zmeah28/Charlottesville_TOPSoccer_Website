import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/components/Layout';
import LogoImage from '@/assets/images/Logo_Image.png';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Charlottesville TOPSoccer</title>
        <meta
          name="description"
          content="Bringing the opportunity of learning and playing soccer to young athletes with disabilities in Charlottesville."
        />
        <link rel="icon" href={LogoImage.src} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
