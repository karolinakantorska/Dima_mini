
// @mui
import { Box, Grid, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { layoutHeader } from 'src/utils/dima';
import { jobs } from 'src/_mock/jobs/jobs';

// hooks
import useResponsive from '../../hooks/useResponsive';

import { SiteTitle } from '../_Reusable/SiteTitle';
import { CardEmptyJobCom } from './CardEmptyJobCom';
import { CardJobCom } from './CardJobCom';


// TODO use location instead use route
export function JobsListCom() {
  //const initialInputs = { param: "Alle" }

  const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');

  //const { query } = useRouter();

  return (
    <>
      <SiteTitle text={layoutHeader.jobs} />
      <Box
        display="grid"
        gridTemplateColumns='repeat(3, 1fr)'
        //justifyItems='stretch'
        //gridAutoFlow="dense"
        columnGap="12px"
        rowGap="12px"
        sx={{ mt: 6 }}
      >

        {jobs.map((job, i) => (
          <React.Fragment key={job.id}>
            <CardJobCom job={job} />
            <CardEmptyJobCom />
          </React.Fragment>

        ))}
        <CardEmptyJobCom />
        <CardEmptyJobCom />
        <CardEmptyJobCom />
        <CardEmptyJobCom color='background.default' />
        <CardEmptyJobCom />

      </Box>
    </>
  )
}
