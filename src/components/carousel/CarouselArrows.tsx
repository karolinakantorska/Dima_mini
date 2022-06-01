import { ReactNode } from 'react';
import { IconifyIcon } from '@iconify/react';
// @mui
import { useTheme, } from '@mui/material/styles';
import { Box, BoxProps, Stack, StackProps, Button, } from '@mui/material';
//

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// ----------------------------------------------------------------------


type IProps = BoxProps & StackProps;

interface Props extends IProps {
  filled?: boolean;
  children?: ReactNode;
  customIcon?: IconifyIcon | string;
  onNext?: VoidFunction;
  onPrevious?: VoidFunction;
}

export default function CarouselArrows({
  filled = true,
  customIcon, // Set icon right
  onNext,
  onPrevious,
  children,
  ...other
}: Props) {
  const theme = useTheme();
  const isRTL = false;

  const style = {
    position: 'absolute',
    //mt: 0,
    height: '100%',
    width: '18%',
    top: 0,
    zIndex: 9,
  } as const;
  const buttonStyle = {
    height: '100%',
    width: '100%',
    color: 'text.opacity',
    '&:hover': {
      backgroundColor: theme.palette.grey[900_12],
    },
  }
  const arrowStyle = {
    fontSize: 60,
    [theme.breakpoints.down('mobile')]: {
      fontSize: 20,
    },
    [theme.breakpoints.between('mobile', 'lg')]: {
      fontSize: 40,
    },
  }
  if (children) {
    return (
      <Box {...other} className="arrow box">
        <Box sx={{ ...style, }}>
          <Button
            aria-label="previous photo"
            size="large"
            onClick={onPrevious}
            sx={{
              justifyContent: 'left',
              ...buttonStyle
            }}
          >
            <ArrowBackIosNewIcon sx={{ ...arrowStyle }} />
          </Button>
        </Box>

        {children}

        <Box sx={{ ...style, right: 0 }}>
          <Button
            aria-label="previous photo"
            size="large"
            onClick={onNext}
            sx={{
              justifyContent: 'right',
              ...buttonStyle
            }}
          >
            <ArrowForwardIosIcon sx={{ ...arrowStyle }} />
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Stack direction="row" spacing={1} {...other}>
      <Button
        aria-label="previous photo"
        size="large"
        sx={{
          justifyContent: 'left',
          ...buttonStyle
        }}
      >
        <ArrowBackIosNewIcon sx={{ ...arrowStyle }} />
      </Button>
      <Button
        aria-label="previous photo"
        size="large"
        sx={{
          justifyContent: 'right',
          ...buttonStyle
        }}
      >
        <ArrowForwardIosIcon sx={{ ...arrowStyle }} />
      </Button>
    </Stack>
  );
}

// ----------------------------------------------------------------------

