import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useResponsive from '../../hooks/useResponsive';
interface LayoutHeader { text: { title: string, untertitle: string, description: string } };

export const SiteTitle = ({ text }: LayoutHeader) => {
    const isDesktop = useResponsive('up', 'lm');
    const isMiddle = useResponsive('up', 'md');
    const isSmall = useResponsive('down', 'sm');
    const { title, untertitle, description } = text;
    const gtc = isSmall ? '1fr' : '56fr 43fr'
    return (
        <Box
            display="grid"
            gridTemplateColumns={gtc}
        >
            <Box>
                <Typography variant="h5" component="h2" sx={{ color: 'text.primary' }}>
                    {title.toUpperCase()}
                </Typography>
                <Typography variant="h3" component="h2" sx={{ color: 'dima' }}>
                    {untertitle}
                </Typography>
            </Box>
            <Box display="grid"
                gridTemplateColumns='5px auto'
                columnGap="12px"
            >
                <Box sx={{ backgroundColor: 'dima' }} />
                <Typography variant="body1" component="h2" align='justify' sx={{ color: 'text.primary' }} >
                    {description}
                </Typography>
            </Box>
        </Box >
    )

}