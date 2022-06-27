import { GetStaticProps } from "next";
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import { ReferenzenListCom } from '../components/_Projekte/ReferenzenListCom';
import { getOrderedCollection } from "src/utils/apis/apis";
import AnimatedExitLayout from '../layouts/animated/AnimatedLayoutExit';

export default function Projekte(props: any) {

  const { data } = props;
  return (
    <Layout>
      <Page title="Projekte | Dima & Partner">
        <ReferenzenListCom projectsList={data} />
      </Page>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {

  const data = await getOrderedCollection("projects", "year");

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
    revalidate: 10,
  };
};
