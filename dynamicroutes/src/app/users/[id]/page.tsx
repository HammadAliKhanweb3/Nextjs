
type UserProps={
    params:Promise<{id:string}>
}

export const generateMetadata = async({params}:UserProps) =>{
  
const {id}=await params;
return {
  
    title:`User${id}`
}

}


const User =async ({params}:UserProps) => {
    const {id} =await params;

  return (
    <div>User is:{id}</div>
  )
}

export default User

