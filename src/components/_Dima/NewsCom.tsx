
// @mui
import { Box, Grid, Button, Stack, Typography } from '@mui/material';
import { layoutHeader } from 'src/utils/dima';

// hooks
import useResponsive from '../../hooks/useResponsive';
import { description } from '../../_mock/referenzen/description';
import { SiteTitle } from '../_Reusable/SiteTitle';


// TODO use location instead use route
export function NewsCom() {
  //const initialInputs = { param: "Alle" }

  const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');

  //const { query } = useRouter();

  return (
    <>
      <SiteTitle text={layoutHeader.news} />

    </>
  )
}
