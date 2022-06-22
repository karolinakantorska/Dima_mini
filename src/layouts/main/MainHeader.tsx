// next
import { useRouter } from 'next/router';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Container, Stack, Typography, Grid } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';

// config
import { HEADER } from '../../config';
// components

import MenuMobile from './MenuMobile';
import { menuConfigSecond, menuConfigAdmin } from './MenuConfig';
import PhoneNrCom from './PhoneNrCom';

import DimaLogoCom from 'src/components/DimaLogoCom';


// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MIDDLE_HEIGHT,
  [theme.breakpoints.up('lm')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
  [theme.breakpoints.down('sm')]: {
    height: HEADER.MOBILE_HEIGHT,
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

export default function MainHeader({ logo = true }: { logo?: boolean }) {

  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const theme = useTheme();
  const { pathname } = useRouter();
  const isHome = pathname === '/';
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const gtc = isDesktop ? 'repeat(3, 1fr)' : isSmall ? '1fr' : 'repeat(2, 1fr)';
  const gc = isDesktop ? '3/4' : '2/3';

  return (
    <AppBar sx={{
      boxShadow: 0,
      bgcolor: isHome ? 'transparent' : 'background.default'
    }}>
      <ToolbarStyle
        //disableGutters
        sx={{
          ...(isOffset && {
            //...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          className='Hallo'
          sx={{
            alignItems: 'center',
            display: "grid",
            gridAutoFlow: 'column',
            gridTemplateColumns: gtc,
            columnGap: "12px",
            rowGap: "20px",
          }}
        >

          {logo &&
            <DimaLogoCom
              x={isDesktop ? 263 : isSmall ? 211 : 237}
              y={isDesktop ? 64 : isSmall ? 52 : 58}
            />}
          <Box sx={{
            grid: 'item',
            display: "grid",
            gridColumn: gc,
            gridAutoFlow: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>

            {!isSmall && <PhoneNrCom />}

            <MenuMobile navConfig={[...menuConfigSecond, ...menuConfigAdmin]} />
          </Box>
        </Container>
      </ToolbarStyle>
      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}