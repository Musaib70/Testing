"use client"

import React from 'react'
import  SWR  from "swr";

const url = 'https://api.quotable.io/random?tags=technology'

const a = (url: string) => fetch (url).then((res) => res.json()) 

const page = () => {

    const {error, isLoading, data} = SWR(url, a)

    if (error) return <div>Error</div>
    if (isLoading) return <div>Loading</div>
    return (

    <div><h1> client Dynamic Page </h1> <br />
    {data.content}
    </div>
  )
}

export default page