import React from 'react'
import { SkipBack,Play,Pause, SkipForward } from 'lucide-react'

const Player = () => {
  return (
    <div className='fixed bottom-2 left-[35%] w-[40rem] bg-[#171717] p-4 flex items-center justify-between text-white'>
    <div className='w-16 h-16 bg-gray-700 rounded-sm'>
    </div>
    <div className='flex gap-6 items-center'>
        <SkipBack size={24} className='cursor-pointer hover:text-gray-300 transition-colors'/>
        <Play size={24}  className='cursor-pointer text-white hover:text-gray-300 transition-colors'/>
        <Pause size={24}  className='cursor-pointer text-white hover:text-gray-300 transition-colors hidden'/>
        <SkipForward size={24} className='cursor-pointer hover:text-gray-300 transition-colors'/>
    </div>
    <div>
        <input type="range" />

    </div>
    </div>
  )
}

export default Player