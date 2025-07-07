import React, { useState } from 'react'
import Lottie from 'lottie-react'
import Image from 'next/image'
import boxAnimation from "../animations/box.json"

type ComponentProps={
  handleSubmit:()=>void;
}

const BoxAnimation = ({handleSubmit}:ComponentProps) => {
  const [isPlayed,setIsPlayed] = useState(false)


  return (
   <div>

    {!isPlayed ? (<button onClick={()=>{
      setIsPlayed(true)
      handleSubmit()
    }}
      
      className='w-64 h-64 bg-red-400 rounded-3xl cursor-pointer'>
      <Image src="image.png" alt="image" />
      
    </button> )
      : (
      <div>
        <div className='w-64 h-64 bg-red-500 rounded-3xl'>
       <Lottie
       className='rounded-3xl'
       animationData={boxAnimation}

       style={{width:"100%",height:"100%"} }      
       >

       </Lottie>
      </div>
      </div>)
      }
      <h1 className='font-bold mt-4'>Open to see Magic</h1>
   </div>


  )
}

export default BoxAnimation