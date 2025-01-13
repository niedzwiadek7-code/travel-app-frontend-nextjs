'use client';

import HeaderPath from "@/components/ui/HeaderPath";
import {Home} from "@mui/icons-material";
import Typography from "@mui/joy/Typography";
import {Box} from "@mui/joy";

const Dashboard = () => {
    return (
      <div>
        <HeaderPath
          elements={[<Home key={0} />, 'Strona główna']}
        />
        <Box
          sx={{
            display: 'flex',
            mb: 1,
            gap: 1,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'start', sm: 'center' },
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <Typography level="h2" component="h1">
            Strona główna
          </Typography>
        </Box>
      </div>
    )
}

export default Dashboard
