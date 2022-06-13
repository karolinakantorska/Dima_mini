// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
import { ContactCom } from 'src/components/_Dima/ContactCom';



export default function Kontakt() {
  //const { themeStretch } = useSettings();
  return (
    <Layout>
      <Page title="Kontakt | Dima & Partner">
        <RootStyle>
          <ContactCom />
        </RootStyle>
      </Page>
    </Layout>
  );
}
