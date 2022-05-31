import type { GetStaticPaths, GetStaticProps } from "next";
// layouts
// components
import Page from '../../components/Page';
import { RootStyle } from '../../components/_Main/RootStyle';

import { OneProjectCom } from '../../components/_Projekte/OneProjectCom';
import { getCollectionId, getCollectionDocument } from "src/utils/apis/apis";

import AnimatedIntroLayout from "src/layouts/main/animatedIntro";
import { ProjectType } from "src/utils/TS/interface";
import Layout from "src/layouts";

export default function Referenz({ data }: { data: ProjectType }) {
  return (

    <Layout>
      <Page title="Projekte | Dima & Partner | Glarus Zurich Arosa">
        <RootStyle>
          <OneProjectCom project={data} />
        </RootStyle>
      </Page>
    </Layout>


  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getCollectionId("projects");
  const paths = data.map((item) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: true };
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const data = await getCollectionDocument("projects", id);
  return {
    props: { data },
    revalidate: 10,
  };
};