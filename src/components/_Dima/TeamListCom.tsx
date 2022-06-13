
// @mui
import { Box, Grid, Button, Stack, Typography } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';

// hooks
import useResponsive from '../../hooks/useResponsive';
import { description } from '../../_mock/referenzen/description';
import { SiteTitle } from '../_Reusable/SiteTitle';


// TODO use location instead use route
export function TeamListCom() {
  //const initialInputs = { param: "Alle" }

  const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  //const { query } = useRouter();

  return (
    <>
      <SiteTitle text={layoutHeader.teams} />
      <Grid container direction="column" justifyContent="center" spacing={2} >
        <Grid item>

          <Box
            display="grid"
            gridTemplateColumns={gtc}
            //justifyItems='stretch'
            //gridAutoFlow="dense"
            columnGap="12px"
            rowGap="20px"
          >

          </Box>
        </Grid>
      </Grid >
    </>
  )
}
/*
        {false &&}
        */