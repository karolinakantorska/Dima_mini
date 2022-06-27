// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import LoadingScreen from 'src/components/LoadingScreen';

export default function Landing() {
  //const { themeStretch } = useSettings();
  return (
    <Layout>
      <Page title="Kontakt | Dima & Partner">
        <LoadingScreen />
      </Page>
    </Layout>
  );
}
