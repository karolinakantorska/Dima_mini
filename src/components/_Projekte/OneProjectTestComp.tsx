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


export function OneProjectTestCom({ project }: { project: ProjectType }) {
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
  const photosCarusel = [];
  photosCarusel.push(project.photos.map((entry) => { console.log('entry', entry); return entry }))

  //photosCarusel = project.photos.concat([project.photo]);
  console.log('photosCarusel', photosCarusel)
  return (
    <>
      <p>Hallo</p>
    </>
  )
}
