// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
import { ContactCom } from 'src/components/_Dima/ContactCom';
import LoadingScreen from 'src/components/LoadingScreen';

export default function Landing() {
  //const { themeStretch } = useSettings();
  return (
    <Layout>
      <Page title="Kontakt | Dima & Partner">
        <RootStyle>

          <LoadingScreen />
        </RootStyle>
      </Page>
    </Layout>
  );
}
