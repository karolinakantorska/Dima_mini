import useResponsive from '../../hooks/useResponsive';
import Glarus from '/public/location/Glarus.jpg';
import { Card, CardMedia, } from '@mui/material';

console.log('Glarus:', Glarus)
// TODO use location instead use route
export function ContactCom() {
  //const initialInputs = { param: "Alle" }

  const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');

  //const { query } = useRouter();

  return (
    <>
      <p>Kontakt</p>
      <Card >
        <CardMedia
          component="img"
          image={Glarus.src}
        />
      </Card >
    </>
  )
}
