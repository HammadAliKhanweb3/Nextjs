import React from 'react'

const Song = ({params}:{params:{id:string}}) => {
  return (
    <div className='text-2xl font-bold '>Song:{params.id}</div>
  )
}

export default Song