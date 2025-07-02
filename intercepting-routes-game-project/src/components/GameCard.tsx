import React from 'react'

type GameProps={
   game:{
    id:number,
    name:string,
    img:string
   }
}

const GameCard = ({game}:GameProps) => {
  return (
    <div className='bg-gray-800 rounded-lg shadow-md p-4 text-white'>
      <img src={game.img} alt={game.name} className='w-full h-32 object-cover rounded-md' />
     <h3 className="text-lg font-semibold mt-2">{game.name}</h3>

    </div>
  )
}

export default GameCard