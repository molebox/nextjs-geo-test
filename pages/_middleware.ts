import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const { geo } = req
  console.log({geo})

  const res = NextResponse.next()
  res.headers.append('x-visitors-city',  geo.city.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
  return res
}