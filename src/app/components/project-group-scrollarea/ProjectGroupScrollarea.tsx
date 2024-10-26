import { Children } from "react";

import {
  Box
} from "@mui/material";

export default function ProjectGroupScrollarea({ children }: { children: Children }) {
  return <>
    <Box className='flex flex-col md:flex-row gap-5 p-5 justify-start w-full overflow-x-hidden'>
      { Children.map(children, (child) => <Box>{child}</Box>) }
    </Box>
  </>
}
