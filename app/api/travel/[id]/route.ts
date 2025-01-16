import {cookies} from "next/headers";
import {NextResponse} from "next/server";

type Params = {
  id: string
}

export async function GET(req: Request, {
  params: paramsPromise
}: Promise<Params>) {
  const params = await paramsPromise
  const cookiesStore = await cookies()
  const accessToken = cookiesStore.get('accessToken')?.value

  if (!accessToken) {
    return new Response('Unauthorized', {status: 401})
  }

  const { id } = params

  const backendResponse = await fetch(
    `${process.env.BACKEND_URL}/travel/find/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }
    }
  )

  const response = await backendResponse.json()
  return NextResponse.json(response)
}
