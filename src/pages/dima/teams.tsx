// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';


import { TeamListCom } from 'src/components/_Dima/TeamListCom';


export default function Teams() {
  return (
    <Layout>
      <Page title="Teams | Dima & Partner">
        <TeamListCom />
      </Page>
    </Layout>
  );
}

