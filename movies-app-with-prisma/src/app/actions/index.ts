'use server'

import { db } from "@/utils/prisma"
import { Description } from "@radix-ui/react-dialog";
import { redirect } from "next/navigation"
import { title } from "process";

export const createMovie = async (formaData: FormData) => {
    const title = formaData.get("title") as string;
    const description = formaData.get("description") as string;
    const image = formaData.get("imageUrl") as string;

    await db.movie.create({
        data: {
            title,
            description,
            image,
        }
    })

    redirect("/all-movies")
}

export const deleteMovie = async (formData: FormData) => {

     const movieId = formData.get("movieID") as string;

     await db.movie.delete({where: {id:movieId}})

}

export const editMovie = async (formData:FormData) => {

      const movieId  = formData.get("movieID") as string;
      const newTitle  = formData.get("title") as string;
      const newDescription  = formData.get("description") as string;
      const newImageURl  = formData.get("imageUrl") as string;

      await db.movie.update(
        {where:{id:movieId},
        data:{
            title:newTitle,
            description: newDescription,
            image: newImageURl
        },
        }
      )}