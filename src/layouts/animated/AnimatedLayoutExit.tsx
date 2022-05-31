import { ReactNode, } from 'react';
import { m, } from 'framer-motion';
// @mui
import { Box, Container, Stack } from '@mui/material';

import MainHeader from '../main/MainHeader';

// ----------------------------------------------------------------------

type Props = {
    children: ReactNode;
};
export default function AnimatedExitLayout({ children }: Props) {
    const transition = {
        type: 'tween',
        ease: 'linear',
        duration: 0.5,
    }
    const variantRec = {
        initial: { opacity: 1, x: '-30vw', },
        exit: { opacity: 0.5, x: '20vw', },
        transition: transition,
    };
    const variant = {
        initial: { opacity: 1 },
        exit: { opacity: 0.5 },
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