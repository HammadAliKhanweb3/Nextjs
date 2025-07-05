import { db } from '@/utils/prisma'
import React from 'react'
import ShowMovies from '@/components/custom-components/page';

const AllMovies =async () => {

  const movies =await db.movie.findMany();

  return (
    <div className='p-10 text-center text-2xl '>
        <h1 className='font-extrabold mb-8'>All Movies</h1>
     <div className='flex gap-18'>
     {movies.length > 0 ? (
       movies.map((m)=><ShowMovies key={m.id} data={m}/> )
     ) :
     (
        <p>No Movies added.</p>
     )}

     </div>
    </div>
  )
}

export default AllMovies