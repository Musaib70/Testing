import { NextRequest , NextResponse } from "next/server";

export async function GET (request: NextRequest) {
return NextResponse.json ({
  name: "musaib",
  Message: "hello, this is API",
  requesttype: "GET"
})
}

export async function POST (request: NextRequest) {
  const req = await request.json()
  if (req.name) {
    return NextResponse.json({
      name: req.name,
      message: "Hello!!! How are you my friend",
      requesType: "Post"
    })
  } else {
  return new NextResponse("ERROR!!!!!!!!!!!!!!!!!!")
  }
}

export async function PUT (request: NextRequest) {
  const req = await request.json()

  if (req.name) {
    return NextResponse.json({
      name: req.name,
      message: "Hello!!! Eid Mubarak",
      requestType: "PUT"
    })
  }
  else {
  return new NextResponse("ERROR!!!!!!!!!!!!!!!!!!")
  }

}

export async function DELETE (request: NextRequest) {

  return NextResponse.json({
    name: "Musaib",
    message: "Hello!!! Eid Mubarak",
    requestType: "DELETE"
  },
 )
  
}