import React from 'react'
import Sidebar from '@/components/Sidebar'
import { games } from '@/db/data'
import GameCard from '@/components/GameCard'

const Games = () => {
  return (
    <div className='flex h-screen'>
     <Sidebar/>

    <div className="flex-1 bg-gray-100 p-4">
        <h1 className="font-bold text-2xl mb-4">Featured Games</h1>
        <div className="flex gap-4">

            {games.map((game)=>(
                 <GameCard key={game.id} game={game}/>
            ))}
           
        </div>
     
    </div>

    
   </div>

  )
}

export default Games