import {Box, Card, Table} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import {GloballyTravelElement} from "@/model";

type Props = {
  elements: GloballyTravelElement[]
  countDays: number
}

const Globally = ({
  elements,
  countDays
}: Props) => {
  return (
    <Card
      sx={{
        width: '100%',
      }}
    >
      <Box sx={{ mb: 1 }}>
        <Typography level='title-md'>
          Kreator wycieczki
        </Typography>
        <Typography level='body-sm'>
          Krok 2. Zakwaterowanie
        </Typography>
      </Box>

      <Divider />

      <Table>
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Miejsce</th>
            <th>Zakres dni</th>
            <th>Koszt</th>
            <th>Akcje</th>
          </tr>
        </thead>

        <tbody>
        {
          elements.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.activity.name}</td>
                <td>{element.activity.place}</td>
                <td>Od {element.from} do {element.to} dnia</td>
                <td>{element.price} zł </td>
                <td>Edytuj</td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    </Card>
  )
}

export default Globally
