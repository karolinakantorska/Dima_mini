
import { m, } from 'framer-motion';
// next

// @mui
import { Box, Grid, } from '@mui/material';

// hooks
import useResponsive from '../../hooks/useResponsive';

// components
import { ProjektCardCom } from './ProjektCardCom';
// _mock_
//import { _mockProjekts } from '../../_mock/referenzen/referenzen';
// utils

import { ProjectsListType } from '../../utils/TS/interface';



export function ReferenzenListCom(
  { projectsList }: {
    projectsList: ProjectsListType,
  }) {
  const projekte: ProjectsListType = [];
  projectsList.map((project) => {
    if (project) {
      projekte.push(project)
    }
  })
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  const transition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.5,
  }
  const variant = {
    initial: { opacity: 1 },
    exit: { opacity: 0 },
    transition: transition,
  };
  return (

    <Grid

      component={m.div}
      {...variant}
      container
      direction="column"
      justifyContent="center"
      spacing={2} >
      <Grid item>
        <Box
          display="grid"
          gridTemplateColumns={gtc}
          //justifyItems='stretch'
          //gridAutoFlow="dense"
          columnGap="12px"
          rowGap="20px"
        >
          {projekte.map((project, i) => {
            const divideIn2 = i % 2 == 0 ? true : false;
            const divideIn4 = (i + 1) % 4 == 0 ? true : false;
            const divideIn8 = (i + 1) % 8 == 0 ? true : false;

            return (
              <ProjektCardCom
                key={project.id}
                project={project}
                gridRow={divideIn2 ? '1' : '2'}
                big={divideIn4 ? true : false}
                //big={false}
                rewerseBig={divideIn8 ? true : false}
              />
            );


          })}
        </Box>
      </Grid>
    </Grid >

  );



}
