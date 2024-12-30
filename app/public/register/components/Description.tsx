'use client'

import {Stack, useTheme} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {EditCalendar, Explore, Grid3x3, TravelExplore} from "@mui/icons-material";

const Description = () => {
  const items = [
    {
      icon: <EditCalendar color='primary' />,
      title: 'Planowanie wycieczki',
      description:
        'Zaplanuj wycieczkę swoich marzeń przy użyciu naszej aplikacji.',
    },
    {
      icon: <Explore color='primary' />,
      title: 'Poznaj nowe miejsca',
      description:
        'Odkrywaj nowe miejsca i ciesz się przygodą z naszą aplikacją.',
    },
    {
      icon: <Grid3x3 color='primary' />,
      title: 'Intuicyjny interfejs',
      description:
        'Korzystaj z intuicyjnego interfejsu, który pozwoli Ci cieszyć się w pełni funkcjonalnością aplikacji.',
    },
    {
      icon: <TravelExplore color='primary' />,
      title: 'Przeglądaj swoje wycieczki',
      description:
        'Dokumentuj swoje wycieczki, rób sobie zdjęcia i zapamiętuj najlepsze chwile.',
    },
  ];

  const { palette } = useTheme()

  return (
    <Stack
      sx={{
        flexDirection: 'column',
        alignSelf: 'center',
        gap: 4,
        maxWidth: 450,
        fontSize: {
          xs: '.8em',
          sm: '1em',
        }
      }}
    >
      <Typography
        level='h2'
        component='h1'
        sx={{
          textAlign: 'center',
          color: palette.primary["500"]
        }}
      >
        Travel App
      </Typography>

      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          <Typography sx={{
            fontSize: '1.1em',
          }}>
            {item.icon}
          </Typography>
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.1em' }}>
              {item.title}
            </Typography>
            <Typography sx={{ color: palette.neutral["400"] }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  )
}

export default Description
