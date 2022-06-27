import { m } from 'framer-motion';
//import Image from 'next/image';
// @mui
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

// components
import { varHover, varTranHover } from '../animate';
import Image from '../Image';
// hooks
import useResponsive from '../../hooks/useResponsive';
import Link from 'next/link';
import { ProjectType } from 'src/utils/TS/interface';
import { TextCardCom } from './textCardCom';
import { CardActionArea } from '@mui/material';
import { PATH_PROJEKTE } from 'src/routes/paths';
import Typography from '@mui/material/Typography';

export function ProjektCardCom({
  project,
  gridRow,
  big,
  rewerseBig,
}: {
  project: ProjectType;
  gridRow: '1' | '2';
  big: boolean;
  rewerseBig: boolean;
}) {
  //console.log('project', project)
  const { id, photo, photoAuthor, } = project;
  //console.log('photoAuthor', photoAuthor)
  const isDesktop = useResponsive('up', 'lm');
  const isSmall = useResponsive('down', 'sm');
  const isBig = isDesktop ? big : false;
  const isReverseBig = isDesktop ? rewerseBig : false;

  const propsPhotoAuthor = {
    position: 'absolute',
    bottom: 0
  };

  const boxSmallProps = {
    minWidth: '20px',
    display: 'grid',
    overflow: 'hidden',
    gridAutoRows: isSmall ? '' : '1fr',

  };
  const boxBigProps = {
    minWidth: '20px',
    display: 'grid',
    overflow: 'hidden',

    gridColumn: isBig ? 'span 3' : 'span 1',
    gridAutoFlow: isBig ? 'column' : 'row',
    gridTemplateColumns: isBig ? ' 1fr 12px 1fr 12px 1fr' : '1fr',
    columnGap: isBig ? '0px' : '0px',
    gridAutoRows: isBig ? 'repeat(2, 1fr)' : '1fr',

  };
  const cardSmallProps = {
    gridRow: { gridRow },
  };
  const cardBigProps = {
    gridColumn: isBig ? rewerseBig ? '3/span 3' : '1/span 3' : '',
    gridRow: isBig ? 'span 2' : { gridRow },
  };

  return (
    <>
      <Box
        //component={m.div}
        //whileHover="hover"
        sx={{ ...boxBigProps }}

      >
        <Card
          ///component={m.div}
          //variants={varHover(1.05)}
          //transition={varTranHover()}
          sx={{ ...cardBigProps }}
        >

        </Card>


      </Box>
    </>
  );
}
/*
      <Box
        sx={isBig ? {
          ...boxBigProps
        } : { ...boxSmallProps }}
        component={m.div}
        whileHover="hover"
      >
        <Card
          component={m.div}
          variants={varHover(1.05)}
          transition={varTranHover()}
          sx={isBig ? {
            ...cardBigProps
          } : { ...cardSmallProps }}
        >
          <Link href={`${PATH_PROJEKTE.projekt}/${id}`} >
            <CardActionArea >
              <Image src={photo.url} alt={photo.alt} ratio="16/9" />
              {photoAuthor &&
                <Typography
                  variant="body2"
                  display="span"
                  sx={{ ...propsPhotoAuthor }}
                >
                  {photoAuthor}
                </Typography>}
            </CardActionArea>
          </Link>
        </Card>
        <TextCardCom project={project} big={isBig} rewerseBig={rewerseBig} />
      </Box>
*/

/*
<Image src={avatar} alt={name} ratio="16/9" />
*/
/*
      {!isDesktop && (
        <Box
          sx={{ ...boxSmallProps }}
          component={m.div}
          whileHover="hover"
        >
          <Card
            component={m.div}
            variants={varHover(1.05)}
            transition={varTranHover()}
            sx={{ ...cardSmallProps }}
          >
            <Link scroll={false} href={`${PATH_PROJEKTE.projekt}/${id}`}  >
              <CardActionArea >
                <Image src={photo.url} alt={photo.alt} ratio="16/9" />
                {photoAuthor &&
                  <Typography
                    variant="body2"
                    display="span"
                    sx={{ ...propsPhotoAuthor }}
                  >
                    {photoAuthor}
                  </Typography>}
              </CardActionArea>
            </Link>
          </Card>
          <TextCardCom project={project} big={big} rewerseBig={rewerseBig} />
        </Box>
      )}
      */