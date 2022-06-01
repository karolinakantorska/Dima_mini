//import { useState, ReactNode, useEffect } from 'react';
//import { m, useAnimation } from 'framer-motion';
// @mui
import { Box, Grid, Table, TableBody, TableRow, TableCell, Typography, } from '@mui/material';
// React Parser
import parse from 'html-react-parser';
// _mock_

import { ProjectType } from '../../utils/TS/interface';
import { firstLettersBig, writeObiektTypeInGerman, writeServiceInGerman } from '../../utils/Text/textUtils';
import CarouselBasic3 from '../carousel/CarouselBasic3';


export function OneProjectCom({ project }: { project: ProjectType }) {
  const row2 = () => {
    const arr = [
      { name: 'realisation', data: project.generalConstr },
      { name: 'bauprojekt', data: project.architect },
      { name: 'standort', data: project.location },
      { name: 'bauherschaft', data: project.client },
      { name: 'bauzeit', data: project.year.toString() },
    ]
    if (project?.cooperation) {
      arr.push({ name: project.cooperation.service, data: project.cooperation.company })
    }
    return arr
  }
  const photosCarusel = project.photos.concat([project.photo]);
  return (
    <>
      <Box >
        <CarouselBasic3 photos={photosCarusel} />
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
      >
        <Grid item sx={{ pr: 12, maxWidth: 800, mt: 9 }} >
          <Table >
            <TableBody>
              {row2().map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="td" sx={{ pr: 17, pt: 3.5, pb: 2.5 }} >
                    <Typography variant="body1" component="p" color="dima">
                      {row.name.toUpperCase()}
                    </Typography>
                  </TableCell>
                  <TableCell align="left" >
                    <Typography variant="body1" component="p" color="text.primary">
                      {row.data}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </Grid>
        <Grid item sx={{ pl: 0, pt: 3.5, maxWidth: 800, mt: 9 }}            >
          <Typography variant="h5" component="h2" paragraph color="dima">
            {firstLettersBig(project.title)}
            <Typography variant="caption" component="p" paragraph color="text.secondary">
              {project.objektType.map((type, i) =>
                `${writeObiektTypeInGerman(type)}${(i + 1 === project.objektType.length)
                  ? ', '
                  : ' und '}`)}
              {project.objektAlter}, {project.size}&#13217;
            </Typography>
          </Typography>
          <Typography variant="body1" component="p" paragraph color="text.primary">
            {parse(project.description)}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
