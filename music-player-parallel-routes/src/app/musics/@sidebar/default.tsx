import React from 'react'
import {Home, Clock, TrendingUp, Menu,} from "lucide-react"


const Default = () => {
  return (
   <aside className="bg-neutral-950  text-white  p-8 min-w-76 flex flex-col min-h-screen justify-between ">
    <section>
        <div className='flex items-center gap-2'>
        <Menu/>
            <h1 className='text-3xl font-extrabold mb-8'> 
                Menu</h1>
        </div>
        <ul className='flex flex-col gap-4 mt-4'>
            <li className='flex items-center gap-2'>
             <Home/>
             <span>Home</span>
            </li>
            <li className='flex items-center gap-2'>
             <TrendingUp/>
             <span>Trending</span>
            </li>
            <li className='flex items-center gap-2'>
             <Clock/>
             <span>Recent</span>
            </li>
        </ul>
    </section>

    <section>
        <ul className=''>
            <h2 className='font-bold text-2xl mb-8'>
                Favourites
            </h2>
        {[1,2,3,4,5].map((song) => 
            <div key={song} className='mt-2 gap-8 flex space-y-3'>
                <img src="/bg.jpg" alt="picture" className='w-16 h-12 rounded-sm'/>
                
                <div>
                <p className='text-white '>
                    Random
                 </p>
                 <p className='text-gray-500 text-sm'>
                    Person
                 </p>
                </div>
            </div>
        )}
        </ul>
       
    </section>
</aside>
  )
}

export default Default