import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Provider as NextAuthProviderGithub } from 'next-auth/client';

import '../styles/global.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NextAuthProviderGithub session={pageProps.session}>  
    <Header />
    <Component {...pageProps} />
    </NextAuthProviderGithub>
  ) 
}

export default MyApp
