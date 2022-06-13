import { CardContent, Card } from '@mui/material';
import CarouselBasic3 from 'src/components/carousel/CarouselBasic3';
import Page from 'src/components/Page';
import LandingVideo from 'src/components/_Main/LandingVideo';
import { RootStyle } from 'src/components/_Main/RootStyle';
import Layout from 'src/layouts';
import LayoutLanding from 'src/layouts/LayoutLanding';


// ----------------------------------------------------------------------

export default function Index() {

  return (
    <LayoutLanding>
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        <LandingVideo />
      </Page>
    </LayoutLanding>

  )
}
