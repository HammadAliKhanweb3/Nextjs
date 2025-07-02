import Link from 'next/link'
import React from 'react'
import {FaCog, FaGamepad, FaTrophy, FaUser} from "react-icons/fa"


const Sidebar = () => {
  return (
    <div className='w-80 p-6  bg-gray-800 flex flex-col justify-between  min-h-screen'>
        <section className="flex-col ">
            <h1 className="font-bold text-3xl mb-6 text-white">Gaming Dashboard</h1>
            <ul >
                <li className='text-white flex items-center gap-3 font-medium text-xl hover:bg-gray-400 p-2 rounded'>
                <FaGamepad  />Games
                </li>
                <li className='text-white flex items-center gap-3 font-medium text-xl hover:bg-gray-400 p-2 rounded'>
                <FaUser/>Trophy
                </li>
                <li className='text-white flex items-center gap-3 font-medium text-xl hover:bg-gray-400 p-2 rounded'>
                <FaTrophy/>Games
                </li>
                 <li className='text-white flex items-center gap-3 font-medium text-xl hover:bg-gray-400 p-2 rounded'>
                <FaCog/>Games
                </li>
            </ul>

        </section>
        <section className='mb-[2rem] '>
            <Link href={"/login"} className='text-white font-medium text-xl hover:bg-gray-400 p-2 rounded'>Login</Link>
        </section>

    </div>
  )
}

export default Sidebar