"use client"
import React from 'react'
import * as motion from "motion/react-client"
import { useRouter } from 'next/navigation'
import BoxAnimation from '@/components/BoxAnimation'




const Home = () => {
const router = useRouter()

const handleSubmit = () =>{
  setTimeout(()=>{
  router.push("/safa-magic")
  },50)
}

  return (
    <div className='body'>
      <div className="hero" >
        <BoxAnimation handleSubmit={handleSubmit}/>
      </div>
    </div>
  )
}

export default Home