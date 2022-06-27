// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { RootStyle } from '../components/_Main/RootStyle';
import PassResetFormCom from 'src/components/_signin/PassResetFormCom';



export default function ResetPass() {
  return (
    <Layout>
      <Page title="Dima & Partner">

        <PassResetFormCom />

      </Page>
    </Layout>
  );
}

