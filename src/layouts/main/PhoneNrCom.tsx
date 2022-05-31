import { Grid, Stack, Typography } from "@mui/material";
import { dimaContact } from "src/utils/dima";

// ----------------------------------------------------------------------

export default function PhoneNrCom() {

    return (
        <Stack sx={{ maxWidth: '200px' }}  >
            <Grid container direction='row' spacing={1} justifyContent="space-between">
                <Grid item >
                    <Typography variant="body2" component="span">{dimaContact.glarus.town}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="body2" component="span">{dimaContact.glarus.phone}</Typography>
                </Grid>
            </Grid>

            <Grid container direction='row' spacing={2} justifyContent="space-between">
                <Grid item >
                    <Typography variant="body2" component="span">{dimaContact.zurich.town}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="body2" component="span">{dimaContact.zurich.phone}</Typography>
                </Grid>
            </Grid>

        </Stack>
    );
}