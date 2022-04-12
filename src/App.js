import React, { useState } from "react";
import Addmovie from "./components/Addmovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import { Data } from "./Data";
function App() {
  const [movies,setMovies]=useState(Data)
  const [search, setSearch] = useState("")
  const addmovie =(newmovie)=>setMovies([...movies,newmovie])
  return <div>
    <Filter search={search} setSearch={setSearch}/>
    <Addmovie addmovie={addmovie}/>
<MovieList search={search} movies={movies} />
  </div>;
}

export default App;
