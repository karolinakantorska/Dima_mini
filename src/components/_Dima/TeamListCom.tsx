
// @mui
import { Box, Grid, Button, Stack, Typography } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';
import { team } from 'src/_mock/team/team';

// hooks
import useResponsive from '../../hooks/useResponsive';
import { description } from '../../_mock/referenzen/description';
import { SiteTitle } from '../_Reusable/SiteTitle';
import { CardPersonCom } from './CardPersonCom';


// TODO use location instead use route
export function TeamListCom() {
  //const initialInputs = { param: "Alle" }

  const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');

  //const { query } = useRouter();

  return (
    <>
      <SiteTitle text={layoutHeader.teams} />
      <Box
        display="grid"
        gridTemplateColumns='repeat(4, 1fr)'
        //justifyItems='stretch'
        //gridAutoFlow="dense"
        columnGap="12px"
        rowGap="20px"
        sx={{ mt: 6 }}
      >
        {team.map((person) => <CardPersonCom key={person.name + person.surname + person.title} person={person} />)}
      </Box>

    </>
  )
}
