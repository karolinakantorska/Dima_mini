// layouts
import Layout from 'src/layouts';
// components
import Page from '../components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
import { NewsListCom } from 'src/components/_Dima/NewsListCom';




export default function News() {
  return (
    <Layout>
      <Page title="News | Dima & Partner">

        <NewsListCom />

      </Page>
    </Layout>

  );
}

