import { styled } from '@mui/material/styles';

export const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(2),
    },
}));