import { ReactNode, } from 'react';
import { m, } from 'framer-motion';
// @mui
import { Box, Container, Stack } from '@mui/material';
import { HEADER } from '../../config';
import MainHeader from '../main/MainHeader';
import { styled } from '@mui/material/styles';
import { ContainerStyle } from './AnimatetLayoutEnter';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

type Props = {
    children: ReactNode;
};



export default function AnimatedExitLayout({ children }: Props) {

    const transition = {
        type: 'tween',
        ease: 'linear',
        duration: 5,
    }
    const variant = {
        initial: { opacity: 1, },
        exit: { opacity: 0, },
        transition: transition,
    };

    return (
        <Container
            //component={m.div} 
            //{...variant} 
            sx={{ backgroundColor: 'transparent' }} >
            <Stack sx={{ minHeight: 1, backgroundColor: 'transparent' }}  >
                <MainHeader />
                <ContainerStyle disableGutters={true}  >
                    {children}
                </ContainerStyle>
            </Stack>
        </Container>
    );
}
