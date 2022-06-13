// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
import { ContactCom } from 'src/components/_Company/ContactCom';


export default function Philosophie() {
  return (
    <Layout>
      <Page title="Philosophie | Dima & Partner">
        <RootStyle>
          <p>Philosophie</p>
        </RootStyle>
      </Page>
    </Layout>
  );
}
