import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router';
// layouts
// components
import Page from '../../components/Page';
import { RootStyle } from '../../components/_Main/RootStyle';
import { _mockProjekts } from '../../_mock/referenzen/referenzen';
//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';
import { OneProjectCom } from '../../components/_Projekte/OneProjectCom';
import Layout from '../../layouts';
import { getCollectionId, getCollectionDocument } from "src/utils/apis/apis";
import AnimatedIntroLayout from "src/layouts/animated/AnimatetLayoutEnter";
import { jobs } from "src/_mock/jobs/jobs";
import { Box, Card, CardContent, Container, Paper, Stack, Typography } from "@mui/material";
import parse from 'html-react-parser';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import { Mail } from "src/components/_Reusable/Mail";

export default function Job({ data }: any) {
  const router = useRouter();
  const { id } = router.query;

  //console.log('id:', id);
  const job = jobs.filter((job) => job.id === id);
  console.log('job', job[0]);

  const { id: jobId,
    announcment,
    start,
    dedline,
    location,
    title,
    procentMin,
    procent,
    description,
    kontaktperson,
    email, } = job[0];

  return (
    <Layout>
      <Page title={`Dima & Partner`}>
        <RootStyle>


          <Card >
            <CardContent>
              <Stack
                direction="column"
                spacing={8}
              >
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                >
                  <Typography
                    variant="body2"
                    component="div"
                  >
                    {`${announcment.toDateString()}`}
                  </Typography>
                </Stack>

                <Typography
                  variant="body2"
                  component="p"
                >
                  {` Unsere Team in ${location} sucht ab ${start.toDateString()}:`}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ color: 'dima' }}
                >
                  {`${title.toUpperCase()} ${procentMin && procentMin.toString().toUpperCase()} - ${procent.toString().toUpperCase()}%`}
                </Typography>

                <Typography
                  variant="body1"
                  component="div"
                >
                  {parse(description)}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                >
                  {`Haben wir Ihre Interesse geweckt?`}

                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ color: 'dima' }}
                >

                  {`Wir warten auf Ihre unterlagen bis ${dedline.toDateString()}`}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  spacing={8}
                >
                  <Typography
                    variant="body1"
                    component="p"
                  >
                    {`Kontaktperson: ${kontaktperson}`}

                  </Typography>

                  <Mail email={email} />
                </Stack>
              </Stack>
            </CardContent>



          </Card>

        </RootStyle>
      </Page>
    </Layout>
  );
}
