import React, { useState } from "react";
// @mui
import { Box, Grid, Button, Stack, Typography, Card, CardMedia, CardHeader, CardContent, CardActions, Popover, Alert } from '@mui/material';
import { Person } from 'src/utils/TS/interface';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
// hooks
import useResponsive from '../../hooks/useResponsive';
import { Mail } from "../_Reusable/Mail";



export function CardPersonCom({ person }: { person: Person }) {
    const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
    const [openAlert, setOpenAlert] = useState(false);
    const handleOpen = (event: React.MouseEvent<SVGSVGElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const copyText = (text: string) => {
        navigator.clipboard.writeText(text);
        setOpenAlert(true);
        setTimeout(() => setOpenAlert(false), 1000);
        clearTimeout();
    }

    const open = Boolean(anchorEl);
    const isDesktop = useResponsive('up', 'lm');
    const isSmall = useResponsive('down', 'sm');
    const { photo, name, surname, title, job, email } = person;

    //const { query } = useRouter();

    return (

        <Card>
            <CardMedia
                component="img"
                image={photo}
                alt={`${name} ${surname} ${job}`}
            />
            <CardContent  >
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    sx={{ height: 180 }}
                >
                    <Grid item>
                        <Typography
                            variant="h6"
                            component="h2"
                            sx={{ color: 'dima' }}
                        >
                            {`${name.toUpperCase()} ${surname.toUpperCase()}`}
                        </Typography>
                        {title.map((title) => <Typography key={title} variant="subtitle1" component="p" >{title}</Typography>)}
                    </Grid>
                    {openAlert && <Alert severity="success">
                        Copied: {email}
                    </Alert>}
                    <Grid item sx={{ width: '100%' }}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-end"
                        >
                            {job.map((job) => <Typography key={job} variant="body1" component="p" >{job}</Typography>)}
                            <Mail email={email} />

                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>


    )
}
