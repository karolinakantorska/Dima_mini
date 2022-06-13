// next
import { useRouter } from 'next/router';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Container, Stack, Typography, Grid } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components

//
import MenuMobile from './MenuMobile';
import { menuConfigSecond } from './MenuConfig';
import PhoneNrCom from './PhoneNrCom';


// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {

  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const theme = useTheme();
  const { pathname } = useRouter();


  const isHome = pathname === '/';
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';

  const gc = isDesktop ? '3/4' : '2/3';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle

        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            alignItems: 'center',
            display: "grid",
            gridAutoFlow: 'column',
            gridTemplateColumns: gtc,
            columnGap: "12px",
            rowGap: "20px",
          }}
        >
          <Box sx={{
            grid: 'item',
            display: "grid",
            gridColumn: gc,
            gridAutoFlow: 'column',
            justifyContent: 'space-between'
          }}>
            {!isSmall && <PhoneNrCom />}

            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={[...menuConfigSecond]} />
          </Box>
        </Container>
      </ToolbarStyle>
      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}