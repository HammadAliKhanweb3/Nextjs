import { Label, } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React from 'react'
import * as actions from "../actions/index"


const AddMovies = () => {
  return (
    <div className='w-10/12 mx-auto p-10'>
    <h1 className='font-bold text-4xl mb-4'>Add a New Movie</h1>
     <form action={actions.createMovie} className='flex flex-col gap-4'>
      <Label htmlFor='title' className='font-bold'>Title</Label>
      <Input className='' type='text' name='title' required></Input> 


      <Label htmlFor='description' className='font-bold'>Description</Label>
      <textarea className='w-full border rounded'  name='description' required></textarea>
    
      <Label htmlFor='imagUrl' className='font-bold'>ImageUrl</Label>
      <Input className='' type='text' name='imageUrl' required></Input>
    
    <Button  type='submit'>Add Movie</Button>
     
     
     </form>


    </div>
  )
}

export default AddMovies