import React from 'react'  
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

async function blogpost() {

  const url = 'https://cdn.contentful.com/spaces/15wzbq2avtdl/entries?access_token=JbSdXCRC-i8WvkugZWN72hZ9fYqXn-q9U7pPcoxTXrs&content_type=blogPost'
  const res = await fetch(url)
  
  try {

    if(!res.ok){
      throw new Error("Message Denied!!!!");
    }
    return res.json()
    
  } catch (error) {
    
    return console.error(error);
    
  }

}

const page = async () => {

  const blog = await blogpost()


  return (

    blog.items.map((item:any)=>{

      const a = blog.includes.Asset.find((img:any) => { return ( item.fields.image.sys.id === img.sys.id )})
      const b = blog.includes.Entry?.find((name:any) => { return ( item.fields.authorname.sys.id === name.sys.id)})

      return (
        <div>
          <h1>{item.fields.title}</h1>
          <h3> Author: {b?.fields.aurthorName}</h3>
          <p>{documentToReactComponents(item.fields.body)}</p>
          <h5>{item.fields.dateAndTime}</h5>
          <img src= {a.fields.file.url} alt="loading" />
          </div>
         
      )
      
    })


  )
  
}

export default page


