import React from 'react'

// type CP:{
//     children:React.ReactNode,
//     Sidebar:React.ReactNode,
//     Songs:React.ReactNode,

// }

const MusicLayout = ({ children,sidebar,songs,player }:{ children: React.ReactNode;sidebar: React.ReactNode;songs: React.ReactNode,player:React.ReactNode}) => {
  return (
    <div className='flex'>
        {sidebar}
        <div className='flex-1'>
            {songs}
        </div>
        {player}
        {children}


    </div>
  )
}

export default MusicLayout