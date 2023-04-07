'use client'

import { info } from 'console';

import React from 'react'
import  swr  from "swr";

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

const url = "https://api.quotable.io/random?tags=technology"

const  fetcher = (url:string) => fetch(url).then((res) => res.json())

const page = () => {
    const {error, isLoading, data} = swr(url,fetcher)

    if (error) return <div>Error!!!</div>
    if (isLoading) return <div>Loading!!!</div>
  return (

    <div>{data.content}</div>
  )
}

export default page