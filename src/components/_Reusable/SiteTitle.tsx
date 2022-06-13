import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface LayoutHeader { text: { title: string, untertitle: string, description: string } };

export const SiteTitle = ({ text }: LayoutHeader) => {

    const { title, untertitle, description } = text;
    return (
        <Box
            display="grid"
            gridTemplateColumns='1fr 1fr'
        >
            <Box>
                <Typography variant="h6" component="h2" sx={{ color: 'text.primary' }}>
                    {title.toUpperCase()}
                </Typography>
                <Typography variant="body1" component="h2" sx={{ color: 'dima' }}>
                    {untertitle}
                </Typography>
            </Box>
            <Box display="grid"
                gridTemplateColumns='5px auto'
                columnGap="12px"
            >
                <Box sx={{ backgroundColor: 'dima' }} />
                <Typography variant="body2" component="h2" align='justify' sx={{ color: 'text.primary' }} >
                    {description}
                </Typography>
            </Box>
        </Box >
    )

}