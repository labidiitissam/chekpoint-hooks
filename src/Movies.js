import React from 'react';
import { Routes , Route } from 'react-router-dom';
import App from './App';
import Error from './Error';

const Movies = () => {
  return (
    <div>

    <Routes>
    <Route exact path="/" element={<App/>}/>
    <Route path="/*" element={<Error/>}/>
    </Routes>

    </div>
  )
}

export default Movies
