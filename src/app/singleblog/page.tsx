import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

async function blog () {
    
    const url = "https://cdn.contentful.com/spaces/15wzbq2avtdl/entries?access_token=JbSdXCRC-i8WvkugZWN72hZ9fYqXn-q9U7pPcoxTXrs&content_type=blogPost"
    const res = await fetch (url)
try {
    if (!res.ok){
        throw new Error("Error!!!!");
    }
    return res.json();

} catch (error) {
    return error
}
}


const page = async () => {

    const blogdata = await blog()  
  return (
    <div>
        <h1>{blogdata.items[1].fields.title}</h1>
        <p>{documentToReactComponents(blogdata.items[1].fields.body)}</p>
        <img src="//images.ctfassets.net/15wzbq2avtdl/Iy8DNeyKbxSjLSZdxR3h7/8d2edab39bad0fa139eed6f61886efa8/blog-wordpress-theme-1.jpg.jpg" alt="loading" 
        />
        </div>
  )
}

export default page