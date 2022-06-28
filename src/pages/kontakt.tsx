// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { ContactCom } from 'src/components/_Dima/ContactCom';

export default function Kontakt() {
  return (
    <Layout>
      <Page title="Kontakt | Dima & Partner">
        <ContactCom />
      </Page>
    </Layout>
  );
}
