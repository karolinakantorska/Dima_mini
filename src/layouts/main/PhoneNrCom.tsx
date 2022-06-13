import { Grid, Stack, Typography } from "@mui/material";
import { dimaContact } from "src/utils/dima";
import { pxToRem } from 'src/utils/getFontValue';
// ----------------------------------------------------------------------
const textProps = {
    fontSize: pxToRem(13),
}
const Adress = ({ text }: any) => {
    const { town, phone } = text;
    return (
        <Grid
            container direction='row' justifyContent="space-between">

            <Typography
                variant="body2"
                component="span"
                sx={{ ...textProps }}
            >
                {town}
            </Typography>


            <Typography
                variant="body2"
                component="span"
                sx={{ ...textProps }}
            >
                {phone}
            </Typography>

        </Grid>)
}
export default function PhoneNrCom() {

    return (
        <Stack sx={{ maxWidth: '200px' }}  >
            <Adress text={dimaContact.glarus} />
            <Adress text={dimaContact.zurich} />
        </Stack>
    );
}