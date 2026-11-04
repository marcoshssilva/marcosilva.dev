import { Children } from "react";

import {
  Box
} from "@mui/material";
import { ProjectGroupScrollareaProps } from "@/app/types";

export default function ProjectGroupScrollarea({ children }: Readonly<ProjectGroupScrollareaProps>) {
  return <Box className='grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5'>
      { Children.map(children, (child) => <Box>{child}</Box>) }
    </Box>
}
