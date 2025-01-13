import {cookies} from "next/headers";
import {NextResponse} from "next/server";

type IBody = {
  name: string;
  days: number;
}

type IResponse = {
  id: number
  name: string
  countDays: number
  travelElementsGlobally: []
  travelElementsLocally: []
}

export async function POST(
  req: Request,
) {
  const cookiesStore = await cookies()
  const accessToken = cookiesStore.get('accessToken')?.value

  if (!accessToken) {
    return NextResponse.json({error: 'Unauthorized'}, {status: 401})
  }

  const body: IBody = await req.json()
  const requestBody = {
    name: body.name,
    countDays: body.days,
    travelElements: [],
  }

  const backendResponse = await fetch(
    `${process.env.BACKEND_URL}/travel`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(requestBody),
    }
  )

  const status = backendResponse.status
  const response: IResponse = await backendResponse.json()

  return NextResponse.json(response, {status})
}
