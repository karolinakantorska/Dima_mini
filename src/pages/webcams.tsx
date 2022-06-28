// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';


import { WebcamsListCom } from 'src/components/_Projekte/WebcamsListCom';


export default function Webcams() {
  return (
    <Layout>
      <Page title="Webcams | Dima & Partner">

        <WebcamsListCom />

      </Page>
    </Layout>
  );
}
