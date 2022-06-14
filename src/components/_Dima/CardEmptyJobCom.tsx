import React, { useState } from "react";
// @mui
import { Box, Grid, Button, Stack, Typography, Card, CardMedia, CardHeader, CardContent, CardActions, Popover, Alert, CardActionArea } from '@mui/material';
import { Job, Person } from 'src/utils/TS/interface';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
// hooks
import useResponsive from '../../hooks/useResponsive';



export function CardEmptyJobCom({ color = 'background.between' }: { color?: string }) {

    const isDesktop = useResponsive('up', 'lm');
    const isSmall = useResponsive('down', 'sm');


    //const { query } = useRouter();

    return (

        <Card sx={{ height: 300, backgroundColor: color, boxShadow: 0 }}>

        </Card>


    )
}
/*
?='background.between'
'backkground.default'
*/