import React, {ReactNode} from "react";
import {Box} from "@mui/joy";
import Header from "@/app/auth/components/Header";
import Sidebar from "@/app/auth/components/Sidebar";
import {cookies} from "next/headers";
import {string} from "yup";

type Props = {
  children: ReactNode;
}

const Layout: React.FC<Props> = async ({
  children
}) => {
  const getProfileData = async () => {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({
    //       name: 'John Doe',
    //       email: 'johndoe@mail.com'
    //     })
    //   }, 3000)
    // })

    // const cookiesStore = await cookies()
    // const x = cookiesStore.get('accessToken')
    // console.log(x)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return await response.json()
  }

  const data = await getProfileData()
  console.log(data)

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
