import React from 'react'
import  Profile  from  '@/app/components/profile';
import Image from "next/image";
import Link from 'next/link';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {  FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import StaticFetch from "./static-fetch/page";

const page = () => {
  return (
    <>
    <main>

        <div className='flex items-center '>
          <div className='m-8'>
              <img src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png"
               alt="loading" 
               height = {50}
               width = {130} />
          </div>

          <div className=' flex  m-8 flex-1 sm:justify-center gap-10'>
            <p>Home</p>
            <p>About Us</p>
            <p>Pricing</p>
            <p>Product</p>
          </div>

          <div className='rounded-full  bg-blue-500 m-8 justify-end py-2 px-6 text-center text-white '>

            <button> Join Us </button>
          </div>
        </div>



  <div className=' flex flex-wrap justify-between'>
    <div className= ' items-center text-gray-800 bg-slate-100 font-light text-md felx-1 justify-center mx-2 my-2 px-6 py-6 rounded-xl w-64 ' >

<Image src = 'https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg'
       alt = "loading"
       height = {50}
       width = {50}/>
         <p>
    I just finished my trial period and was so amazed with the support and good results that I purchased the Pro version for my business.
  </p>

  <h2 className=' text-2xl font-bold py-2 '>John Doe</h2>

    </div>
 
    <div className= ' items-between  text-gray-800 bg-slate-100 font-light text-md felx-1  mx-2 my-2 px-6 py-6 rounded-xl w-64 ' >

<Image src = 'https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg'
       alt = "loading"
       height = {50}
       width = {50}/>
         <p>
    I just finished my trial period and was so amazed with the support and good results that I purchased the Pro version for my business.
  </p>

  <h2 className=' text-2xl font-bold py-2 '>Musaib Khan</h2>

    </div>
 
    <div className= ' items-center text-gray-800 bg-slate-100 font-light text-md felx-1 justify-center mx-2 my-2 px-6 py-6 rounded-xl w-64 ' >

<Image src = 'https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg'
       alt = "loading"
       height = {50}
       width = {50}/>
         <p>
    I just finished my trial period and was so amazed with the support and good results that I purchased the Pro version for my business.
  </p>

  <h2 className=' text-2xl font-bold py-2 '>Hamza Ahmed</h2>

    </div>

    </div>

    <div className='flex justify-center  mx-14 my-14 py-2 text-center shadow-lg'>
     <div className='px-6 py-3 rounded-md border border-green-700'>
  < input type = "Email Address" className='flex-grow' placeholder ='Email Address'/>
  </div>
 <button className='py-3 px-6 bg-green-700 rounded  text-blue-50 font-semibold text-sm'>Subscribe</button>
</div> 


<div className='flex bg-pink-50 m-4 p-8 rounded-sm shadow-lg gap-6 text-slate-800  '>

  <div className=' bg-white rounded-lg p-8 basis-1/3'>
  <h2 className='font-extrabold text-xl'>Standard</h2>
      <p>Monthly Plan</p>
      <p className='mt-4 text-4xl font-extrabold'>$25</p>
  </div>

  <div className=' bg-pink-600 rounded-lg p-8  text-white basis-1/3'>
  <h2 className='font-extrabold text-xl'>Popular</h2>
      <span>Monthly Plan</span>
      <p className='mt-4 text-4xl font-extrabold' >$40</p>
  </div>

  <div className=' bg-white rounded-lg p-8 basis-1/3'>
  <h2 className='font-extrabold text-xl'>Premium</h2>
      <span>Monthly Plan</span>
      <p className='mt-4 text-4xl font-extrabold'>$55</p>
  </div>

</div>



<div>

  <div className='bg-slate-100  my-10 py-6 px-3 rounded-sm  max-w-screen-sm mx-auto'>

<div className='flex gap-1'>

  <img className='rounded-full h-10 w-10'
  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
   alt="loading" />

   <span>
    <strong>Albert John</strong>
    </span>
    <span className= 'from-neutral-500 font-light text-md'>@Albertjohn</span>
    <span> &middot; </span>
    <span> Sep 26 </span>
    <span className='ml-auto'>
    <BiDotsHorizontalRounded/>
    </span> 
</div>

<div className='ml-11 mx-2 -mt-3'>
      <p>You are amazing if you take time to comment on a tweet or YouTube video or a blogpost that has helped you! 🙌</p>
</div>

<div className='flex justify-around mt-6'>
  <span className='flex'>  <FaRegComment/> 
   <p className='ml-3 -mt-1'>20</p> </span>
  <span className='flex'> <AiOutlineRetweet />
  <p className='ml-3 -mt-1'>17</p>  </span>
  
  <span className='flex'> < AiOutlineHeart /> 
  <p className='ml-3 -mt-1'>215</p> </span>

  <span> <IoIosStats/> </span>
  
  <span> <FiUpload/> </span>
  </div>
</div>

</div>


<div className='grid grid-cols-[70%,30%] py-4 px-4 m-6 max-w-screen-sm mx-auto  bg-slate-50'>

  <div>
  <h3 className='font-bold text-lg'>Veg Burger</h3>
    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque hic eligendi</p>
    </div>
    <span className='flex items-center justify-center'> 🍔 </span>

    <div className=' my-4'>
    <h3 className='font-bold text-lg'>Tacos</h3>
    <p className='text-justify'>Quos sunt non labore ab dicta ea sequi error, sapiente asperiores quas.</p>
    </div>
    <span className="flex justify-center items-center"> 🌮 </span>


<div>
<h3 className='font-bold text-lg'>Classic Waffles</h3>
    <p className='text-justify'>Dolorem nesciunt minima reprehenderit natus nam ipsum ipsa, laudantium.</p>
</div>

<span className="flex justify-center items-center"> 🧇 </span>

</div>


<div className='flex justify-center font-bold'>
 
  <div className='  rounded-full bg-blue-600 text-white mx-4 my-4 px-4 py-4'>
  <button> <Link href={"/fetch-serverside"} > Dynamic fetch server side </Link></button>
  </div>
  <div className='  rounded-full bg-blue-600 text-white mx-4 my-4 px-4 py-4'>
  <button>
  <Link href="/static-fetch">Static fetch </Link></button> 
  </div>
  <div className='  rounded-full bg-blue-600 text-white mx-4 my-4 px-4 py-4'>
  <button> <Link href={"/client-fetching"}>Dynamic fetch client side</Link> </button>
  </div>
  <div className='  rounded-full bg-blue-600 text-white mx-4 my-4 px-4 py-4'>
  <button> <Link href={"/parallel"}>Parallel</Link> </button>
  </div>
  <div className='  rounded-full bg-blue-600 text-white mx-4 my-4 px-4 py-4'>
  <button> <Link href={"/sequential"}>Sequential</Link> </button>
  </div>
</div>

<div className='flex justify-center font-bold'>
 
  <div className='  rounded-full bg-blue-500 text-white mx-4 my-4 px-4 py-4'>
  <button> <Link href={"/serverStatic"} > Server Static </Link></button>
  </div>
  <div className='  rounded-full bg-blue-500 text-white mx-4 my-4 px-4 py-4'>
  <button>
  <Link href="/serverDynamic">Server Dynamic </Link></button> 
  </div>
  <div className='  rounded-full bg-blue-500 text-white mx-4 my-4 px-4 py-4'>
  <button> <Link href={"/clientSide"}>Client Side</Link> </button>
  </div>
  <div className='  rounded-full bg-blue-500 text-white mx-4 my-4 px-4 py-4'>
  <button> <Link href={"/parallelserver"}>Parallel Server</Link> </button>
  </div>
  <div className='  rounded-full bg-blue-500 text-white mx-4 my-4 px-4 py-4'>
  <button> <Link href={"/sequentialserver"}>Sequential Server</Link> </button>
  </div>
</div>


<div className='flex justify-center font-bold'>
 
  <div className='  rounded-full bg-blue-500 text-white mx-4 my-4 px-4 py-4'>
  <button> <Link href={"/singleblog"} > Single Blog </Link></button>
  </div>
  <div className='  rounded-full bg-blue-500 text-white mx-4 my-4 px-4 py-4'>
  <button>
  <Link href="/multipleblogs">Multiple Blogs </Link></button> 
  </div>

</div>
         </main>
    </>
  )
}



export default page