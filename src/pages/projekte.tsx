import { GetStaticProps } from "next";
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import { ReferenzenListCom } from '../components/_Projekte/ReferenzenListCom';
import { getOrderedCollection } from "src/utils/apis/apis";
import LoadingScreen from "src/components/LoadingScreen";


export default function Projekte(props: any) {

  const { data } = props;
  return (
    <Layout>
      <Page title="Projekte | Dima & Partner">
        {/*<LoadingScreen />*/}
        <ReferenzenListCom projectsList={data} />
      </Page>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async () => {

  const data = await getOrderedCollection("projects", "year");
  return {
    props: { data },
    revalidate: 10,
  };
};
