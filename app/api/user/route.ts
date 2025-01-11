import {cookies} from 'next/headers'
import {NextResponse} from "next/server";
import {User} from "@/model";

export async function GET() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value || null

  if (!accessToken) {
    return NextResponse.json({message: 'Unauthorized'}, {status: 401})
  }

  const backendResponse = await fetch(
    `${process.env.BACKEND_URL}/user`,
    {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    }
  )

  const response = JSON.parse(await backendResponse.text())
  const user = new User(response.firstName, response.lastName, response.email)

  return NextResponse.json(user)
}
