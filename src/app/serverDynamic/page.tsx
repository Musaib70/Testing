import { url } from 'inspector'
import React from 'react'

interface info{
    _id: string, 
      content: string ,
      author: string,
      tags: string[],
      authorSlug: String,
      length: number,
      dateAdded: string,
      dateModified: string,
    }

async function serverDynamic() {
    const url = 'https://api.quotable.io/random?tags=technology'
    const res = await fetch (url, {cache: "no-store"})
if (!res.ok){
    throw new Error("Can't find");
}

return res.json()
}


const page = async () => {

    const b = await serverDynamic()
  return (
     
    <div>{b.content}</div>
  )
}

export default page