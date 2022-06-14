import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router';
// layouts
// components
import Page from '../../components/Page';
import { RootStyle } from '../../components/_Main/RootStyle';
import { _mockProjekts } from '../../_mock/referenzen/referenzen';
//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';

import Layout from '../../layouts';

import { jobs } from "src/_mock/jobs/jobs";

import { JobCom } from "src/components/_Dima/JobCom";

export default function Job({ data }: any) {
  const router = useRouter();
  const { id } = router.query;

  //console.log('id:', id);
  const job = jobs.filter((job) => job.id === id);
  //console.log('job', job[0]);

  return (
    <Layout>
      <Page title={`Dima & Partner`}>
        <RootStyle>
          <JobCom job={job[0]} />
        </RootStyle>
      </Page>
    </Layout>
  );
}
