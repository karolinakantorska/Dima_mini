// layouts
import Layout from 'src/layouts';
// components
import Page from '../components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';
import { NewsCom } from 'src/components/_Dima/NewsCom';




export default function News() {
  return (
    <Layout>
      <Page title="News | Dima & Partner">
        <RootStyle>

          <NewsCom />
        </RootStyle>
      </Page>
    </Layout>

  );
}

