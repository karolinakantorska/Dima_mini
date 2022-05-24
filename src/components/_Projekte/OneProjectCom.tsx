//import { useState, ReactNode, useEffect } from 'react';
//import { m, useAnimation } from 'framer-motion';
// @mui
import { Box, Container, Grid, Table, TableBody, TableRow, TableCell, Typography } from '@mui/material';
// React Parser
import parse from 'html-react-parser';
// _mock_
import Image from 'next/image';
import { ProjectType } from '../../utils/TS/interface';
import { firstLettersBig, writeObiektTypeInGerman, writeServiceInGerman } from '../../utils/Text/textUtils';



export function OneProjectCom({ project }: { project: ProjectType }) {
  /*
    const { photo, photos, id, title, description, year, objektAlter, objektType, services, region, phase, client, architect, cooperation, location } = project;
    */
  const rows = [
    { name: 'realisation', data: project.generalConstr },
    { name: 'bauprojekt', data: project.architect },
    { name: 'standort', data: project.location },
    { name: 'bauherschaft', data: project.client },
    { name: 'bauzeit', data: project.year },
    //project.cooperation && { name: project.cooperation.service, data: project.cooperation.company },
  ];
  return (
    <Container disableGutters={true}>
      {project &&
        <>
          <Container
            disableGutters={true}
            sx={{
              //backgroundColor: 'red',
              position: 'relative',
              mb: 9
            }}>
            <Image
              src={project.photo.url}
              alt={project.photo.alt}
              //layout="responsive"
              width='1700px'
              height='956px'
            //layout='fill'
            />
          </Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <Table>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.data}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
            <Grid item
            >
              <Typography variant="h5" component="h2" paragraph color="dima">
                {firstLettersBig(project.title)}
              </Typography>
              <Typography variant="caption" component="p" paragraph color="text.secondary">
                {project.objektType.map((type, i) =>
                  `${writeObiektTypeInGerman(type)}${(i + 1 === project.objektType.length)
                    ? ', '
                    : ' und '}`)}
                {project.objektAlter}, {project.size}&#13217;
              </Typography>
              <Typography variant="body1" component="p" paragraph color="text.secondary">
                {parse(project.description)}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <Grid
                container
                justifyContent="center"
              >
                <Typography variant="h6" component="h2" paragraph color="dima">
                  {firstLettersBig(project.title)} | {project.year} | {project.location}
                  <Typography variant="caption" component="p" paragraph color="text.secondary">
                    {project.objektType.map((type, i) =>
                      `${writeObiektTypeInGerman(type)}${(i + 1 === project.objektType.length)
                        ? ', '
                        : ' und '}`)}
                    {project.objektAlter}, {project.size}&#13217;
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body1" component="span" paragraph color="text.primary">
                {`Unsere Leistungen: `}
              </Typography>
              {project.services.map((service, i) => <Typography key={service} variant="body1" component="span" paragraph color="text.primary">
                {writeServiceInGerman(service)}{(i + 1 === project.services.length) ? '' : ', '}
              </Typography>)}
            </Grid>
            {project.client && <Grid item>
              <Typography variant="body1" component="span" paragraph color="text.primary">
                Bauher: {project.client}
              </Typography>
            </Grid>}
            {project.architect && <Grid item>
              <Typography variant="body1" component="span" paragraph color="text.primary">
                Architektur: {project.architect}
              </Typography>
            </Grid>}
            {project.cooperation && <Grid item><Typography variant="body1" component="p" paragraph color="text.primary">
              {project.cooperation.service}: {project.cooperation.company}
            </Typography></Grid>}


            <Grid item>
              <Typography variant="body1" component="p" paragraph color="text.secondary">
                {parse(project.description)}
              </Typography>

            </Grid>
          </Grid></>}
    </Container >
  );
}

