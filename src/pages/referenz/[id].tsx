import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router';
// layouts
// components
import Page from '../../components/Page';
import { RootStyle } from '../../components/_Main/RootStyle';
import { _mockProjekts } from '../../_mock/referenzen/referenzen';
//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import { OneProjectCom } from '../../components/_Projekte/OneProjectCom';
import Layout from '../..//layouts';
import { getCollectionId, getCollectionDocument } from "src/utils/apis/apis";

export default function Referenz({ data }: any) {
  const router = useRouter();
  const { id } = router.query;
  //console.log('id:', id);
  //const project = _mockProjekts.filter((project) => project.id === id);
  //console.log('project', project);
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
  console.log(paths);
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const data = await getCollectionDocument("projects", id);
  return {
    props: { data },
    revalidate: 10,
  };
};