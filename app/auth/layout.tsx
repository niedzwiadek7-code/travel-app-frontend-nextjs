import React, {ReactNode} from "react";
import {Box} from "@mui/joy";
import Header from "@/app/auth/components/Header";
import Sidebar from "@/app/auth/components/Sidebar";

type Props = {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Sidebar />
      <Box
        component="main"
        className="MainContent"
        sx={{
          px: { xs: 2, md: 6 },
          pt: {
            xs: 'calc(12px + var(--Header-height))',
            sm: 'calc(12px + var(--Header-height))',
            md: 3,
          },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          height: '100dvh',
          gap: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout
