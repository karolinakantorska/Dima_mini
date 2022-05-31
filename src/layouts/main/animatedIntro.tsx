import { ReactNode, } from 'react';
import { m, } from 'framer-motion';
// @mui
import { Box, Container, Stack } from '@mui/material';

import MainHeader from './MainHeader';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};
export default function AnimatedIntroLayout({ children }: Props) {
  const transition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.5,
  }
  const variantRec = {
    initial: { opacity: 0.5, x: '20vw', },
    animate: { opacity: 0, x: '100vw', },
    transition: transition,
  };
  const variant = {
    initial: { opacity: 0.5 },
    animate: { opacity: 1 },
    transition: transition,
  };
  return (
    <>
      <Box
        component={m.div}
        {...variantRec}
        sx={{
          backgroundColor: 'dima',
          top: 72,
          width: '30vw',
          height: '100vh',
          position: "fixed",
          zIndex: 1200
        }}>
      </Box>
      <Container component={m.div} {...variant}>
        <Stack sx={{ minHeight: 1 }}>
          <MainHeader />
          {children}
          <Box sx={{ flexGrow: 1 }} />
        </Stack>
      </Container>
    </>
  );
}

