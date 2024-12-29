import { cookies } from "next/headers";
import {NextResponse} from "next/server";

type IBody = {
  email: string;
  password: string;
}

export async function POST(
  req: Request,
) {
  const body: IBody = await req.json()
  const backendResponse = await fetch(
    `${process.env.BACKEND_URL}/auth/signin`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  )

  const status = backendResponse.status
  const response = await backendResponse.json()

  console.log('status', status)
  console.log('response', response)

  const cookieStore = await cookies()
  cookieStore.set('accessToken', response.access_token)

  return NextResponse.json(response, {status})
}
