import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import * as React from "react";
import {Box} from "@mui/joy";
import Form from "./Form";

const Login = () => {
  return (
        <Sheet
          sx={{
            width: 400,
            py: 3,
            px: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
            marginTop: '5rem',
          }}
          variant="outlined"
        >
          <Typography
            level='h2'
            component='h1'
            sx={{ textAlign: 'center' }}
          >
            Rejestracja
          </Typography>
          <Box>
            <Typography level="h4" component="h1">
              <b>Witaj podróżniku!</b>
            </Typography>
            <Typography level="body-sm">Zarejestruj się, by kontynuować.</Typography>
          </Box>
          <Form />
          <Typography
            endDecorator={<Link href="/public/login">Zaloguj się</Link>}
            sx={{ fontSize: 'sm', alignSelf: 'center' }}
          >
            Masz już konto?
          </Typography>
        </Sheet>
  )
}

export default Login
