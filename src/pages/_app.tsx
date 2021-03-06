// highlight
import '../utils/highlight';
// scroll bar
import 'simplebar/src/simplebar.css';
// editor
import 'react-quill/dist/quill.snow.css';
// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import cookie from 'cookie';
import { ReactElement, ReactNode } from 'react';
// next
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Head from 'next/head';
import App, { AppProps, AppContext } from 'next/app';
// @mui
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

//Auth
import { AuthProvider } from '../contexts/FirebaseContext';
import { AnimatePresence } from 'framer-motion';

// utils
import { getSettings } from '../utils/getSettings';
// contexts
import { CollapseDrawerProvider } from '../contexts/CollapseDrawerContext';
// theme
import ThemeProvider from '../theme';
// components


import ProgressBar from '../components/ProgressBar';
import MotionLazyContainer from '../components/animate/MotionLazyContainer';

// ----------------------------------------------------------------------

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {

  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps, } = props;
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CollapseDrawerProvider>

            <MotionLazyContainer>
              <ThemeProvider>
                <ProgressBar />
                <AnimatePresence
                  exitBeforeEnter
                //onExitComplete={handleExitComplete}
                >
                  <Component {...pageProps} key={router.route} />
                </AnimatePresence>
              </ThemeProvider>
            </MotionLazyContainer>

          </CollapseDrawerProvider>
        </LocalizationProvider>
      </AuthProvider>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
