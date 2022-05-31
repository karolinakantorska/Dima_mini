import { GetStaticProps } from "next";
// layouts
import AnimatedExitLayout from "src/layouts/main/animatedExit";
// components
import Page from '../components/Page';
import { RootStyle } from '../components/_Main/RootStyle';
import { ReferenzenListCom } from '../components/_Projekte/ReferenzenListCom';
import { getOrderedCollection } from "src/utils/apis/apis";


export default function Projekte(props: any) {
  const { data, user } = props;
  return (
    <AnimatedExitLayout>
      <Page title="Dima & Partner | Glarus Zurich Arosa">
        <RootStyle>
          <ReferenzenListCom projectsList={data} user={user} />
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
