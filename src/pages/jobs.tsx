// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import { RootStyle } from 'src/components/_Main/RootStyle';

import { JobsCom } from 'src/components/_Dima/JobsCom';


export default function Jobs() {
  return (
    <Layout>
      <Page title="Jobs | Dima & Partner">
        <RootStyle>
          <JobsCom />
        </RootStyle>
      </Page>
    </Layout>
  );
}
