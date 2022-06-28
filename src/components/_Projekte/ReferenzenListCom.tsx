
import { m } from 'framer-motion';
import { Box, Grid, } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { ProjektCardCom } from './ProjektCardCom';
import { ProjectsListType } from '../../utils/TS/interface';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';

  const transition = {
    type: 'tween',
    ease: 'linear',
    duration: router.query.id && 1,
  };
  const variant = {
    initial: { opacity: 1 },
    exit: router.query.id && { opacity: 0 },
    transition: transition,
  };

  return (
    <Box
      component={m.div}
      animate={{
        scale: [1.2, 1, 1, 1.2, 1.2],
        rotate: [270, 0, 0, 270, 270],
        opacity: [0.25, 1, 1, 1, 0.25],
        borderRadius: ['25%', '25%', '50%', '50%', '25%'],
      }}
      transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
      sx={{
        width: 100,
        height: 100,
        borderRadius: '25%',
        position: 'absolute',
        border: (theme) => `solid 3px red`,
      }}
    />
  );
}

/*
    <Box
      //component={m.div}
      //{...variant}
      display="grid"
      gridTemplateColumns={gtc}
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
            rewerseBig={divideIn8 ? true : false}
          />
        );
      })}
    </Box>
    */