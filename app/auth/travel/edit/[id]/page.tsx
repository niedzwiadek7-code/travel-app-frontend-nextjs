'use client';

import HeaderPath from "@/components/ui/HeaderPath";
import {Home} from "@mui/icons-material";
import Form from "@/app/auth/travel/create/components/Form";
import Sheet from "@mui/joy/Sheet";
import {auto} from "@popperjs/core";
import {Box, Card} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import {useParams} from "next/navigation";

const TravelCreate = () => {
  const { id } = useParams()
  return (
    <div>
      <HeaderPath
        elements={[<Home key={0} />, 'Wycieczki', 'Planowanie podróży']}
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
          Planowanie podrózy
        </Typography>
      </Box>
    </div>
  )
}

export default TravelCreate
