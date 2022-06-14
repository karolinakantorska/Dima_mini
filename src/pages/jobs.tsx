// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';

import { JobsListCom } from 'src/components/_Dima/JobsListCom';


export default function Jobs() {
  return (
    <Layout>
      <Page title="Jobs | Dima & Partner">
        <RootStyle>
          <JobsListCom />
        </RootStyle>
      </Page>
    </Layout>
  );
}
