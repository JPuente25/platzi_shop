import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { MoviePage } from "./routes/MoviePage";
import { ErrorPage } from "./routes/ErrorPage";
import { PackMoviesPage } from "./routes/PackMoviesPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route 
          path='/'
          element={<HomePage />}
        />
        <Route 
          path='/trends/:page'
          element={<PackMoviesPage type='trends'/>}
        />
        <Route 
          path='/search/:query/:page'
          element={<PackMoviesPage type='search'/>}
        />
        <Route 
          path='/movie/:id'
          element={<MoviePage />}
        />
        <Route 
          path='/category/:name/:id/:page'
          element={<PackMoviesPage type='category' />}
        />
        <Route 
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
