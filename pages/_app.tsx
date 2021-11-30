import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {theme} from '../common/styles/theme';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from '../common/styles/globalStyles';
import Navbar from '../common/components/Navbar/Navbar';
import { ModalProvider  } from '../common/hooks/useModal';
import SeasonModal from '../common/components/SeasonModal/SeasonModal';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
          <ModalProvider>
          <NextNProgress  color="red" />
            <GlobalStyle />
            <Navbar />
            <Component {...pageProps} />
            <SeasonModal />
          </ModalProvider>
        </ThemeProvider>
}

export default MyApp
