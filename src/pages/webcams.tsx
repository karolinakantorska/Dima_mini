// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';

import { WebcamsCom } from 'src/components/_Projekte/WebcamsCom';


export default function Webcams() {
  return (
    <Layout>
      <Page title="Webcams | Dima & Partner">
        <RootStyle>
          <WebcamsCom />
        </RootStyle>
      </Page>
    </Layout>
  );
}
