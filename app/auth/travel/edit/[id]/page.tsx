import HeaderPath from "@/components/ui/HeaderPath";
import {Home} from "@mui/icons-material";
import Form from "@/app/auth/travel/create/components/Form";
import Sheet from "@mui/joy/Sheet";
import {auto} from "@popperjs/core";
import {Box, Card, Grid} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
// import {useParams} from "next/navigation";
import Globally from "@/app/auth/travel/edit/[id]/components/Globally";
import {cookies} from "next/headers";
import {TravelRecipe} from "@/model";

type Params = {
  id: string
}

const TravelCreate = async ({
  params: paramsPromise
}: {
  params: Promise<Params>
}) => {
  const params = await paramsPromise
  const { id } = params

  const getTravelDetails: () => Promise<TravelRecipe> = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/travel/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: (await cookies()).toString()
      }
    })
    const data = await response.json()
    return TravelRecipe.fromObject(data)
  }

  const travel = await getTravelDetails()

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

        <Grid
          container
          spacing={4}
          sx={{
            marginTop: 1
          }}
        >
          <Grid
            xs={12}
            md={7}
            sx={{
              paddingRight: 10
            }}
          >
            <Globally
              elements={travel.travelElementsGlobally}
              countDays={travel.countDays}
            />
          </Grid>

          <Grid
            xs={12}
            md={5}
          >
            Sprzedam Opla
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default TravelCreate
