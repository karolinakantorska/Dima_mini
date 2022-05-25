import { styled } from '@mui/material/styles';

export const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(8),
    },
}));