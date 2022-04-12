import React from 'react'
import MovieCArd from './MovieCArd'
function MovieList({movies,search}) {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',flexWrap:'wrap'}}>
       
        {movies.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())).map((movie,i)=><MovieCArd movie={movie} key={i}/>)}
    </div>
  )
}

export default MovieList