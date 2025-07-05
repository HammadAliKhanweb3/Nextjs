import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className=' flex flex-col justify-center items-center gap-4 min-h-screen w-10/12 mx-auto bg-10'>
      <div className='flex justify-center items-center gap-8'>
      <img src="/film-slate.png" alt="" className='w-20 h-24 flex'/>
      <h1 className='font-extrabold text-6xl text-center drop-shadow-lg'>Movies App</h1>
      </div>
      <p className='text-lg text-gray-500'>Add and manage your favorite movies with ease</p>
      
      <div className='flex space-x-4 mt-4'>
        <Link href={"/add-movie"}>
        <button className='bg-blue-500 p-4 hover:bg-blue-700 text-xl rounded-lg transform duration-300 ease-in-out shadow-md hover:scale-105 transition-all text-white'>Add Movie</button>
        </Link>
        <Link href={"/all-movies"} className='bg-gray-500 p-4 hover:bg-gray-600 text-xl rounded-lg transform duration-300 ease-in-out shadow-md hover:scale-105 transition-all text-white'>
        <button>View All Movies</button>
        </Link>
      </div>
      </div>

  )
}

export default Home