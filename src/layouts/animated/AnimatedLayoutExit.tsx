import { ReactNode, } from 'react';
import { m, } from 'framer-motion';
// @mui
import { Box, Container, Stack } from '@mui/material';

import MainHeader from '../main/MainHeader';
import { styled } from '@mui/material/styles';
import useResponsive from 'src/hooks/useResponsive';
// ----------------------------------------------------------------------

type Props = {
    children: ReactNode;
};


export default function AnimatedExitLayout({ children }: Props) {
    const isMiddle = useResponsive('up', 'md');
    const top = isMiddle ? 72 : 60;
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
                    top: top,
                    width: '30vw',
                    height: '100vh',
                    position: "fixed",
                    zIndex: 1200
                }}>
            </Box>
            <Container component={m.div} {...variant}>
                <Stack sx={{ minHeight: 1 }}>
                    <MainHeader logo={false} />
                    {children}
                    <Box sx={{ flexGrow: 1 }} />
                </Stack>
            </Container>
        </>
    );
}