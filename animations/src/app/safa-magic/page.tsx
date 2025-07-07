import React from 'react'
import * as motion from "motion/react-client"
import Image from 'next/image'

const SafaMagic = () => {
  return (
    <div className='body'>
      <motion.div className='box' ><Image src="safa.png" alt=""  /></motion.div>
    </div>
  )
}

export default SafaMagic