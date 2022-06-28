
// @mui

import { Box, Card, CardActions, Typography } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';
import { webcams } from 'src/_mock/webcams/webcams';

// hooks
import useResponsive from '../../hooks/useResponsive';

import { SiteTitle } from '../_Reusable/SiteTitle';
import { WebcamsCardCom } from './WebcamsCardCom';


// TODO use location instead use route
export function WebcamsListCom() {
  //const initialInputs = { param: "Alle" }

  const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  //const { query } = useRouter();

  return (
    <>
      <SiteTitle text={layoutHeader.webcam} />
      <Box
        display="grid"
        gridTemplateColumns='repeat(3, 1fr)'
        columnGap="12px"
        rowGap="12px"
        sx={{ mt: 6 }}
      >
        {webcams.map((wcam) => (
          <WebcamsCardCom key={wcam.id} wcam={wcam} />
        ))}
        <Card>
          <Box
            component='video'
            controls
            autoPlay
            muted
            title='title'
            sx={{ height: 280, width: '100%', border: 'none ' }}
          >

            <source src="https://dms.licdn.com/playlist/C4E05AQHtoxRfP1NyEA/mp4-640p-30fp-crf28/0/1646142684108?e=1657033200&v=beta&t=JD6uWuv_GPejN6jaBRpms6DU3iwbsKh3Rzs5xirNwI4"
              title='title' type="video/mp4" />

            Your browser does not support the video tag.

          </Box>
          <Box sx={{ height: 70, pl: 2, pt: 1.65 }}>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: 'dima', }}
            >
              {`SUGGESTION`}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: 'text.secondary', }}
            >
              {`Im Bau - Realisierung Geplant Auf 2022`}
            </Typography>
          </Box>
        </Card>
      </Box>
    </>
  )
}
