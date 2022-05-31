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
import { filter } from 'src/utils/myUtils/filterFunction';
import { FilterReferenzenCom } from './FilterReferenzenCom';
import { ProjectsListType, User } from '../../utils/TS/interface';
import Iconify from '../Iconify';
import { PATH_PROJEKTE } from 'src/routes/paths';

// TODO use location instead use route
export function ReferenzenListCom(
  { projectsList, user }: {
    projectsList: ProjectsListType,
    user: User
  }) {

  const initialInputs = { param: "Alle" }
  const [sorted, setSorted] = useState(false);
  const [xPosition, setXPosition] = useState(200);
  const [yPosition, setYPosition] = useState(728);
  const isDesktop = useResponsive('up', 'lm');
  const isSmallDesktop = useResponsive('up', 'lg');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  const { query } = useRouter();
  const { inputs, handleInputChange, } = useForm({ param: "Alle" });
  //const filteredProjects = filter(projectsList, inputs);

  const filteredProjects = projectsList;
  // console.log('inputs', inputs)
  useEffect(() => {
    const position = () => {
      if ((window.innerWidth - 1700) > 0) {
        return (window.innerWidth - 1700) * 0.5 + 50
      }
      else return 50
    }
    setXPosition(position())
    setYPosition(728 - ((1700 - window.innerWidth) * 0.37))
  }, [])
  // TODO SOLVE IT 
  useEffect(() => {
    if (inputs.param !== initialInputs.param) {
      setSorted(true);
    }
  }, [inputs])

  const StickyBox = styled(Box)(({ theme }) => ({
    position: 'sticky', zIndex: 1200, top: 88, width: '100%', display: 'flex',
    alignItems: 'end',
    justifyContent: 'end'
  }));

  return (
    <>
      <StickyBox >
        <NextLink href={PATH_PROJEKTE.addProject} >
          <Button variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
            Neues Projekt
          </Button>
        </NextLink>
      </StickyBox>
      <Container disableGutters={true}>
        <Grid container direction="column" justifyContent="center" spacing={2} sx={{
          mt: 0
        }}>
          <Grid item>
            {false && <FilterReferenzenCom
              sorted={sorted}
              inputs={inputs}
              handleInputChange={handleInputChange}
            />}
            <Box
              display="grid"
              gridTemplateColumns={gtc}
              //justifyItems='stretch'
              //gridAutoFlow="dense"
              columnGap="12px"
              rowGap="20px"
            >
              {filteredProjects.map((project, i) => {
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
      </Container >
    </>
  );
}
