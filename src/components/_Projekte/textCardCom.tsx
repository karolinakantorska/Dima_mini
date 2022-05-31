import Link from 'next/link';
import { useState, } from 'react';
// @mui
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProjectType } from '../../utils/TS/interface';
import useResponsive from '../../hooks/useResponsive';
import { firstLettersBig } from '../../utils/Text/textUtils';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { IconButton, Container, Grid, CardActions, CardContent, CardActionArea, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Alert } from '@mui/material';
import { deleteProjectFromFirestore } from 'src/utils/apis/deleteFromFirestore';
import { useRouter } from 'next/router';
import { PATH_PROJEKTE } from '../../routes/paths';

export function TextCardCom({ project, big, rewerseBig, authorPhoto }: {
  project: ProjectType, big: boolean, rewerseBig: boolean
  , authorPhoto: string
}) {

  const { push } = useRouter();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<null | { code: string, message: string }>(null);
  const { title, location, id } = project;
  const isDesktop = useResponsive('up', 'lm');
  const cardProps = {
    p: isDesktop ? 4 : 1.2,
  }
  const cardPropsBig = {
    gridColumn: rewerseBig ? '1 / span 2' : '4 / span 2',
    gridRow: 'span 2',
    backgroundColor: 'background.default'
  }
  const PhotoAuthorTypography = styled(Typography)(({ theme }) => ({
    position: 'relative',
    right: isDesktop ? '30px' : '0px',
    top: isDesktop ? '-30px' : '-5px'
  }));
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  };
  function handleDelete() {
    deleteProjectFromFirestore('projects', id)
      .catch((error) => {
        console.log('error', error);
        //setError(error)
        //setLoading(false);
      })
    setOpen(false);
  };
  const Icons = () => (
    <>
      <Link href={`${PATH_PROJEKTE.projekt}/edit/${id}`}  >
        <IconButton aria-label={'edit'}>
          <EditRoundedIcon />
        </IconButton>
      </Link>
      <IconButton
        aria-label={'delete'}
        onClick={handleOpen}
      >
        <DeleteIcon />
      </IconButton>
    </>
  )
  const TextBox = () => (
    <Grid
      container
      direction='column'
      justifyContent="space-between"
      sx={big ? { backgroundColor: 'background.paper', p: 4, minHeight: '300px' } : { height: '100%' }}
    >
      <CardContent sx={{ p: 0 }}>
        {authorPhoto && <PhotoAuthorTypography variant="caption" display="p">{authorPhoto} </PhotoAuthorTypography>}
        <Typography variant="h6" component="h2" sx={{
          mt: 2, mb: 0.5,
        }}>
          {title.toUpperCase()}
        </Typography>
        <Typography variant="body2" component="h6" sx={{ mb: 2, color: 'text.secondary', }}>
          {firstLettersBig(location)}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <Icons />
      </CardActions>
    </Grid>
  )

  return (
    <>
      {error && <Alert severity="error" onClose={() => { setError(null) }} >Fehler:{error.message} </Alert>}
      {!isDesktop
        ? <Card sx={{ ...cardProps }}  >
          <TextBox />
        </Card>
        :
        <>
          {!big &&
            <Card sx={{ ...cardProps }}  >
              <TextBox />
            </Card>
          }
          {big &&
            <Card sx={big ? { ...cardPropsBig } : { ...cardProps }} >
              <Box
                className='outside'
                sx={{
                  display: 'grid',
                  gridTemplateColumns: rewerseBig ? '1fr 12px' : '12px 1fr',
                }}
              >
                <Box className='inside' sx={{
                  backgroundColor: 'background.default',
                  gridRow: 'span 2',
                  gridColumn: rewerseBig ? '2' : '1',
                }}>
                </Box>
                <TextBox />
              </Box>
            </Card>
          }
        </>}

      <Dialog open={open} onClose={() => handleClose()}>
        <DialogTitle >Bist du siecher, dass du das Projekt löschen willst?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Das {title.toUpperCase()} Projekt wird unwiederbringlich gelösched.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Löschen</Button>
          <Button onClick={handleClose} autoFocus variant="outlined">
            Schliessen
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}


