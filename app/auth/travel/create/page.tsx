'use client';

import HeaderPath from "@/components/ui/HeaderPath";
import {Home} from "@mui/icons-material";
import Form from "@/app/auth/travel/create/components/Form";
import Sheet from "@mui/joy/Sheet";
import {auto} from "@popperjs/core";
import {Box, Card} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";

const TravelCreate = () => {
  return (
    <div>
      <HeaderPath
        elements={[<Home key={0} />, 'Wycieczki', 'Nowa wycieczka']}
      />

      <Box
        sx={{
          display: 'flex',
          mb: 1,
          gap: 1,
          flexDirection: 'column',
          // flexDirection: { xs: 'column', sm: 'row' },
          // alignItems: { xs: 'start', sm: 'center' },
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Typography level="h2" component="h1">
          Nowa wycieczka
        </Typography>

        <Box
          component="main"
          className="MainContent"
          sx={{
            display: 'flex',
            width: '500px',
            // maxWidth: '600px',
            mx: 'auto',
            py: { xs: 2, md: 3 },
          }}
        >
          <Card
            sx={{
              width: '100%'
            }}
          >
            <Box sx={{ mb: 1 }}>
              <Typography level='title-md'>
                Kreator wycieczki
              </Typography>
              <Typography level='body-sm'>
                Krok 1. Podstawowe informacje
              </Typography>
            </Box>
            <Divider />
            <Form />
          </Card>
        </Box>
      </Box>
    </div>
  )
}

export default TravelCreate
