import { cookies } from 'next/headers'
import {NextResponse} from "next/server";

export async function GET() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')
  console.log('has access token', accessToken)
  console.log('access token', accessToken)

  const backendResponse = await fetch(
    `${process.env.BACKEND_URL}/user`,
    {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  )

  const response = await backendResponse.text()

  return NextResponse.json(response)
}
