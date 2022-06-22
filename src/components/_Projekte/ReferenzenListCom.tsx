import { useState, useEffect } from 'react';
import { m, } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { Box, Container, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// hooks
import useResponsive from '../../hooks/useResponsive';
import { useRouter } from 'next/router';
// components
import { ProjektCardCom } from './ProjektCardCom';
// _mock_
//import { _mockProjekts } from '../../_mock/referenzen/referenzen';
// utils
import { useForm } from 'src/utils/myUtils/useForm';
import { FilterReferenzenCom } from './FilterReferenzenCom';
import { ProjectsListType, User } from '../../utils/TS/interface';



export function ReferenzenListCom(
  { projectsList }: {
    projectsList: ProjectsListType,
  }) {


  const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';

  if (projectsList) {
    return (
      <>
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
              {projectsList.map((project, i) => {
                const divideIn2 = i % 2 == 0 ? true : false;
                const divideIn4 = (i + 1) % 4 == 0 ? true : false;
                const divideIn8 = (i + 1) % 8 == 0 ? true : false;
                if (project) {
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
                }

              })}
            </Box>
          </Grid>
        </Grid >
      </>
    );
  }
  else {
    <p>Es gibt momentan keine Projekte in Data Base</p>
  }

}
