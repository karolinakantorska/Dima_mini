
// @mui


// hooks
import useResponsive from '../../hooks/useResponsive';




// TODO use location instead use route
export function ContactCom() {
  //const initialInputs = { param: "Alle" }

  const isDesktop = useResponsive('up', 'lm');

  const isSmall = useResponsive('down', 'sm');

  //const { query } = useRouter();

  return (
    <>
      <p>Kontakt</p>

    </>
  )
}
