import {cookies} from "next/headers";
import {NextRequest, NextResponse} from 'next/server'

export async function middleware(
  req: NextRequest
) {
  const cookiesStore = await cookies()
  const pathname = req.nextUrl.pathname

  if (pathname.startsWith('/public') && cookiesStore.has('accessToken')) {
    return NextResponse.redirect(new URL('/auth/dashboard', req.url))
  }

  if (pathname.startsWith('/auth') && !cookiesStore.has('accessToken')) {
    return NextResponse.redirect(new URL('/public/login', req.url))
  }
}

// export const config = {
//   matcher: '/:path',
// }
