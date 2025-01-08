import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import * as React from "react";
import {Box} from "@mui/joy";
import Form from "./components/Form";

const Login = () => {
  return (
        <Sheet
          sx={{
            width: 400,
            mx: 1,
            py: 3,
            px: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <Typography
            level='h2'
            component='h1'
            sx={{ textAlign: 'center' }}
          >
            Travel App
          </Typography>
          <Box>
            <Typography level="h4" component="h1">
              <b>Witaj podróżniku!</b>
            </Typography>
            <Typography level="body-sm">Zaloguj się by kontynuować.</Typography>
          </Box>
          <Form />
          <Typography
            endDecorator={<Link href="/public/register">Zarejestruj się</Link>}
            sx={{ fontSize: 'sm', alignSelf: 'center' }}
          >
            Nie masz konta?
          </Typography>
        </Sheet>
  )
}

export default Login
