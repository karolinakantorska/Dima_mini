
import Page from 'src/components/Page';
import LandingButtonsCom from 'src/components/_Main/LandingButtonsCom';
import LandingVideo from 'src/components/_Main/LandingVideo';

import Layout from 'src/layouts';
import LayoutLanding from 'src/layouts/LayoutLanding';


// ----------------------------------------------------------------------

export default function Index() {

  return (
    <LayoutLanding>
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        < LandingVideo />
        <LandingButtonsCom />
      </Page>
    </LayoutLanding>

  )
}
