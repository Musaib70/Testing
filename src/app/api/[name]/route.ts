import { NextRequest , NextResponse } from "next/server";

export async function GET (request: NextRequest , {params}: { params : { name:string } }) {



    return NextResponse.json({
        from: params.name,
        message: `Hello! ${params.name} have a nice day..` ,
        requestType: "GET"
    })
}