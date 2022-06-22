import { ReactNode } from 'react';
import { Box, Container, Stack } from '@mui/material';
// guards
//import AuthGuard from '../guards/AuthGuard';
// components
import { HEADER } from 'src/config';
import MainHeader from './main/MainHeader';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: 'main' | 'animatedExit' | 'animatedEnter';
};
const ContainerStyle = styled(Container)(({ theme }) => ({
  paddingTop: HEADER.MIDDLE_HEIGHT,
  [theme.breakpoints.up('lm')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: HEADER.MOBILE_HEIGHT,
  },
}));
export default function Layout({ variant = 'main', children }: Props) {

  return (
    <Container >
      <Stack sx={{ minHeight: 1 }}>
        <MainHeader />
        <ContainerStyle disableGutters={true} >
          {children}
        </ContainerStyle>
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
    </Container>
  )
}

