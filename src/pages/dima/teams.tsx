// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';

import { TeamListCom } from 'src/components/_Dima/TeamListCom';


export default function Teams() {
  return (
    <Layout>
      <Page title="Teams | Dima & Partner">
        <RootStyle>
          <TeamListCom />
        </RootStyle>
      </Page>
    </Layout>
  );
}
