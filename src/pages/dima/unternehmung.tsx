// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';

export default function Unternehmung() {
  return (
    <Layout>
      <Page title="Unternehmung | Dima & Partner">
        <RootStyle>
          <p>Unternehmung</p>
        </RootStyle>
      </Page>
    </Layout>
  );
}
