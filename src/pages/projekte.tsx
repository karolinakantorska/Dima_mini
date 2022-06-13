import { GetStaticProps } from "next";
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { RootStyle } from '../components/_Main/RootStyle';
import { ReferenzenListCom } from '../components/_Projekte/ReferenzenListCom';
import { getOrderedCollection } from "src/utils/apis/apis";
import AnimatedExitLayout from '../layouts/animated/AnimatedLayoutExit';

export default function Projekte(props: any) {
  const { data } = props;
  return (
    <AnimatedExitLayout>
      <Page title="Projekte | Dima & Partner">
        <RootStyle>
          <ReferenzenListCom projectsList={data} />
        </RootStyle>
      </Page>
    </AnimatedExitLayout>

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
