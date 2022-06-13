import { CardContent, Card } from '@mui/material';
import CarouselBasic3 from 'src/components/carousel/CarouselBasic3';
import Page from 'src/components/Page';
import LandingVideo from 'src/components/_Main/LandingVideo2';

import { RootStyle } from 'src/components/_Main/RootStyle';
import Layout from 'src/layouts';


// ----------------------------------------------------------------------

export default function Index() {

  return (
    <Layout>
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        <LandingVideo />
      </Page>
    </Layout>)
}
