import { ReactNode, } from 'react';
import { m, } from 'framer-motion';
// @mui
import { Box, Container, Stack } from '@mui/material';
import { HEADER } from '../../config';
import MainHeader from '../main/MainHeader';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

type Props = {
    children: ReactNode;
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

export default function AnimatedExitLayout({ children }: Props) {

    const transition = {
        type: 'tween',
        ease: 'linear',
        duration: 0.5,
    }
    const variant = {
        initial: { opacity: 1 },
        exit: { opacity: 0 },
        transition: transition,
    };

    return (
        <Container component={m.div} {...variant}  >
            <Stack sx={{ minHeight: 1 }}>
                <MainHeader />
                <ContainerStyle disableGutters={true} >
                    {children}
                </ContainerStyle>
                <Box sx={{ flexGrow: 1 }} />
            </Stack>
        </Container>
    );
}