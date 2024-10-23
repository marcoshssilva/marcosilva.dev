import { SiteHeaderButtonHello } from "@/app/types";
import {
  Button
} from "@mui/material";

export default function HeaderButtonHello(props: SiteHeaderButtonHello) {
  return <Button variant={props.variant} sx={{ paddingY: '1rem', paddingX: '2rem' }} color={props.color}>
    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.35)' }}>
      { props.content }
    </span>
    { props.icon ?? <></> }
  </Button>
}
