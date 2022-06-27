// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';


import { JobsListCom } from 'src/components/_Dima/JobsListCom';


export default function Jobs() {
  return (
    <Layout>
      <Page title="Jobs | Dima & Partner">
        <JobsListCom />
      </Page>
    </Layout>
  );
}
