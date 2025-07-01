import { movies } from "@/app/db";
import { NextRequest } from "next/server";


export async function GET(_req:Request,{ params }: { params: { id: string } }) {
    console.log("hello");
    
  const { id } =await params;
  const movieId = parseInt(id, 10); // Convert id to a number

  if (isNaN(movieId)) {
    return new Response("Invalid ID", { status: 400 });
  }

  const movie = movies.find((m) =>{ 
    console.log(m);
    m.id === movieId
}
);

  return movie ? new Response(JSON.stringify({ movie }), { status: 200 }) : new Response("Movie not found", { status: 404 });
}



export async function PATCH(req:Request,{params}:{params:{id:string}}){

    const {id} =await params;
    const index = movies.findIndex((m)=>m.id===+id);
    console.log(index);
    
    if(!index) return new Response("Movie not found",{status:404})

    const updatedMovie =await req.json();

    movies[index] = {...updatedMovie} 
    console.log(movies[index]);
    

    // const updateName = body.name ? (movie.name = body.name) :movie.name;

    // const updateGenre = body.genre ? (movie.genre = body.genre): movie.genre;

    return new Response(JSON.stringify(movies[index]),{
        status:200
    });

} 



export async function POST(req:Request,{params}:{params:{id:string}}){

    const {id}=params;
    
    const movie =await req.json();
    console.log(movie);
    

    if(movie){
        movies.push(movie)
    }
    console.log(movies);
    

    return new Response(JSON.stringify({movies}),{status:200})


}

export async function DELETE(req:Request,{params}:{params:{id:string}}){
    const {id}=params;
    const index = movies.findIndex((m)=>m.id===+id);
    console.log(index);
    
    if(!index) return new Response("Movie not found",{status:404})

    movies.splice(index,1);
    console.log(movies);
    

    return new Response(JSON.stringify({movies}),{status:200})
}
