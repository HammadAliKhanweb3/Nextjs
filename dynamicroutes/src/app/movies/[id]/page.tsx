import React from 'react'

type UserProps={
    params:Promise<{id:string}>
}

const generateMetaData = async({params}:UserProps) =>{
const {id}=await params;
return {
    title:`User${id}`
}

}


const User =async ({params}:UserProps) => {
    const {id} =await params;

  return (
    <div>User:{id}</div>
  )
}

export default User