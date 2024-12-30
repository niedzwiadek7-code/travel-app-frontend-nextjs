'use client'

import Description from "@/app/public/register/components/Description";
import {Stack, Grid} from "@mui/joy";
import Form from "@/app/public/login/components/Form";
import Login from "@/app/public/login/page";
import Sheet from "@mui/joy/Sheet";
import SignUp from "@/app/public/register/components/SignUp";

const Register = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        maxWidth: '100%',
      }}
      columns={{
        xs: 12,
        md: 6
      }}
    >
      <Grid
        order={{
          xs: 2,
          md: 1,
        }}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Description />
        </Stack>
      </Grid>
      <Grid
        order={{
          xs: 1,
          md: 2,
        }}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <SignUp />
      </Grid>
    </Grid>
  )
}

export default Register
