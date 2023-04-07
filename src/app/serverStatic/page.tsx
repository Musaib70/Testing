import { ifError } from 'assert'
import { error, log } from 'console'
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

async function staticServer() {
    const url = 'https://api.quotable.io/random?tags=technology'
    const res = await fetch (url)

    try {
        if(!res.ok){
            throw new Error("Failed to fetch data");
        }
    
        return res.json()
        
    } catch (error:any) {
        return error;
    }
        
    }




const page = async () => {

    const a = await staticServer()
    if (a.error){
        return <div>Failed to fetch</div>
    }
     
  return (
  
    <div>  {a.tags}<br />
          {a.content}</div>
  )
}


export default page