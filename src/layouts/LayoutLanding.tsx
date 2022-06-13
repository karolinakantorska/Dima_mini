import { ReactNode } from 'react';
import { Box, Container, Stack } from '@mui/material';
// guards
//import AuthGuard from '../guards/AuthGuard';
// components
import MainHeader from './main/MainHeader';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: 'main' | 'dashboard';
};
export default function LayoutLanding({ variant = 'dashboard', children }: Props) {

  return (

    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />
      {children}
      <Box sx={{ flexGrow: 1 }} />
    </Stack>

  )
}

