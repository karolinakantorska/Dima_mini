
// @mui
import { Container, Grid, Typography } from '@mui/material';
//import useResponsive from '../../hooks/useResponsive';
// components



export function JobsCom() {
    //const isDesktop = useResponsive('up', 'lm');
    //const isSmall = useResponsive('down', 'sm');

    return (
        <Container>
            <Grid container direction="row" justifyContent="center" spacing={4}>
                <Grid item>
                    <Typography variant="h6" component="h1" paragraph color="dima">
                        Freie Stellen:
                    </Typography>
                    <Typography gutterBottom>
                        Jobs
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
