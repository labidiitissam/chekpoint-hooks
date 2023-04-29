import { useState } from 'react';
import './App.css';
import { moviesData } from './Components/Data/Data';
import ListMovies from './Components/ListMovies/ListMovies';
import FilterMovie from './Components/FilterMovis/FilterMovie';
import AddMovie from './Components/AddMovie/AddMovie';
import FilteredList from './Components/FileteredList/FilteredList';



  function App() {
  const [movies , setMovies] = useState(moviesData);

  const [inputSearch , setInputSearch] = useState("")
 
  const add =(newMovie) => {
  setMovies([...movies , newMovie]);
  }

  return (
    <div className="App">
    <h1>Movie List</h1>
    <FilterMovie inputSearch={inputSearch} setInputSearch={setInputSearch}/>
    <ListMovies movies={movies} inputSearch={inputSearch}/>
    <AddMovie add={add}/>
    <FilteredList/>

    </div>
  );
}

export default App;
