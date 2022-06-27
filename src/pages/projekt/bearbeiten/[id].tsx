
import type { GetStaticPaths, GetStaticProps } from "next";
import Page from "src/components/Page"
import { useRouter } from 'next/router';

import ProjectNewEditForm from "src/components/_Projekte/ProjectNewEditForm";
// layouts
import Layout from "src/layouts"
import { getCollectionId, getCollectionDocument } from "src/utils/apis/apis";
import AuthGuard from "src/guards/AuthGuard";
// components

export default function NeuesProjekt({ data }: any) {
  const isEdit = true;
  const router = useRouter();
  const { id } = router.query;
  console.log('id:', id);
  console.log('data:', data);
  return (
    <AuthGuard>
      <Layout>
        <Page title={`${isEdit ? 'Edit' : 'Neues'} Projekt | Dima & Partner`}>

          <ProjectNewEditForm isEdit={isEdit} currentProject={data} />

        </Page>
      </Layout>
    </AuthGuard>

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
  console.log('data:', data);
  return {
    props: { data },
    revalidate: 10,
  };
};