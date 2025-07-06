"use server"
import {z}  from "zod"
import { signupSchema } from "../../schema"


export const createUser =async (values:z.infer<typeof signupSchema>) => {
  const result = signupSchema.safeParse(values)

  if(!result.success){
    return{ status:"error", message: result.error.message}

  }

  return{status:"error", message: "User create Successfully"}

}

