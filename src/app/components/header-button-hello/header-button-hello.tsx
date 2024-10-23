import { SiteHeaderButtonHello } from "@/app/types";
import {
  Button
} from "@mui/material";

export default function HeaderButtonHello(props: SiteHeaderButtonHello) {
  return <Button variant={props.variant} sx={{ paddingY: '1rem', paddingX: '2rem' }} color={props.color}>
    { props.content }
    { props.icon ?? <></> }
  </Button>
}
