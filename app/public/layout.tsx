import {ReactNode} from "react";
import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import ModeToggle from "@/components/ui/ToggleMode";
import { Box } from "@mui/joy";

type Props = {
  children: ReactNode,
}

const Layout: React.FC<Props> = ({
  children,
}) => {
  return (
    <>
      <Box
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          paddingRight: '1rem',
          paddingTop: '.5rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          zIndex: 1000,
        }}
      >
        <ModeToggle />
      </Box>
      <Sheet
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        {children}
      </Sheet>
    </>
  )
}

export default Layout
