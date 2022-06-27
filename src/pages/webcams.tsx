// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';


import { WebcamsCom } from 'src/components/_Projekte/WebcamsCom';


export default function Webcams() {
  return (
    <Layout>
      <Page title="Webcams | Dima & Partner">

        <WebcamsCom />

      </Page>
    </Layout>
  );
}
