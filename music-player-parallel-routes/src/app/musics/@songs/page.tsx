import Link from "next/link"
import { resolve } from 'path'
import React from 'react'
import {Heart,Clock} from "lucide-react"

const songs=[
    {   
        id:1,
        song:"Qawali",
        artist:"NFAK",
        published:"2002",
        duration:"3.00"
    },
    {

        id:2,
        song:"asanrap",
        artist:"Russian",
        published:"2004",
        duration:"4.00"
    },
    
    {
        id:3,
        song:"Welcome",
        artist:"Justtin bieber",
        published:"2005",
        duration:"5.00"
    },

]

const Songs = async() => {

await new Promise((resolve) =>{
    setTimeout(() => {
        resolve("content is currently loading")
    }, 2000);
},) 
  return (
    <div className='w-[100%] mx-auto p-12  bg-gray-800 min-h-screen' >
      <h2 className='text-3xl font-bold mt-2  text-white mb-8'>Songs Collection</h2>
      
        <ul className='space-y-4'>
          
        { songs.map((song)=>{
          return(
                <Link href={`/musics/${song.id}`} key={song.id} className="block">
                <li key={song.id} className='flex p-2 items-center justify-between gap-4 hover:bg-gray-900 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 rounded-sm'>
              <div className="flex gap-4">
              <div>
                <img src="/bg.jpg" alt="picture" className='w-16 h-16 rounded-sm' />
              </div>
              <div>
                <p className='text-white text-3xl font-bold'>{song.song}</p>
                <p className='text-sm text-gray-500'>{song.artist}</p>
              </div>
              </div>
              <div className="flex gap-2 p-4">
                 <div className="text-gray-500">
                 <Clock/><span >{song.duration}</span>
                 </div>
             
              <Heart className="hover:text-red-500 cursor-pointer text-gray-500 "/>

              </div>

            </li>
                </Link>
          )
        })  }
        </ul>
        
      
    </div>
  )
}

export default Songs