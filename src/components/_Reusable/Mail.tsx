import React, { useState } from "react";
// @mui
import { Box, Grid, Button, Stack, Typography, Card, CardMedia, CardHeader, CardContent, CardActions, Popover, Alert, IconButton } from '@mui/material';
import { Person } from 'src/utils/TS/interface';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
// hooks
import useResponsive from '../../hooks/useResponsive';

export const Mail = ({ email }: { email: string }) => {
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
    return (
        <>
            <MailOutlineSharpIcon
                sx={{ fontSize: '36px', cursor: 'pointer' }}
                aria-owns={open ? email : undefined}
                aria-haspopup="true"
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
                onClick={() => copyText(email)}
            />

            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handleClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1, backgroundColor: openAlert ? 'success.dark' : 'background.paper' }}>{openAlert && 'copied: '}{email}</Typography>
            </Popover>
        </>
    )
}