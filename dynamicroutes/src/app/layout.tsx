import './globals.css'
import React, { ReactNode } from 'react'



const layout = ({children}:{children:ReactNode}) => {
  return (
    <html>
      <body>
      <div className='min-h-screen bg-gray-500'>
      <nav>
        <ul className='flex justify-center items-center gap-10  bg-blue-500 p-6'>
        <li className='font-2xl'>
            Home
          </li><li className='font-2xl'>
            Contact
          </li><li className='font-2xl'>
            Home
          </li><li className='font-2xl'>
            About
          </li>
        </ul>
      </nav>
    <div>
      {children}
    </div>

    </div>
      </body>
    </html>

  )
}

export default layout