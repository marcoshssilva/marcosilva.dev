import { Children } from "react";

import {
  Box
} from "@mui/material";

export default function ProjectGroupScrollarea({ children }: { children: Children }) {
  return <>
    <Box className='grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5'>
      { Children.map(children, (child) => <Box>{child}</Box>) }
    </Box>
  </>
}
