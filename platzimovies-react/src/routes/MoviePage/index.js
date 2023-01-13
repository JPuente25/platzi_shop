import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieOrSimilar } from '../../api/useMovieOrSimilar';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ItemContainer } from '../../components/ItemContainer';
import './index.css';

const MoviePage = () => {
   const params = useParams();

   const { movieOrSimilar: movieData, setMovieId 
         } = useMovieOrSimilar({ id: params.id });

   const { movieOrSimilar: similarMoviesData, 
           movieId: similarId, 
           setMovieId: setSimilarId 
         } = useMovieOrSimilar({id: params.id, similar: true});

   if (params.id !== similarId) {
      setSimilarId(params.id);
   }

   const backgroundImage = `${imageUrl}${movieData?.poster_path}`;
   const movieTitle = movieData?.original_title;
   const movieScore = movieData?.vote_average.toFixed(1);
   const movieDescription = movieData?.overview;
   const movieGenres = movieData?.genres;
   const similarMovies = similarMoviesData?.results;

   return (
      <React.Fragment>
         <Header
            arrow={true}
            title={null}
            search={false}
            background={backgroundImage}
            long={true}
         />

         <section className="movie-container">
            <div>
               <h1 className="movie-title">{movieTitle}</h1>
               <p className="movie-score">{movieScore}</p>
               <p className="movie-description">{movieDescription}</p>
            </div>

            <ItemContainer
               title={null}
               textButton={null}
               item="category"
               data={movieGenres}
            />

            <ItemContainer
               title="Similar Movies"
               textButton={null}
               item="movies"
               data={similarMovies}
               setId={setMovieId}
            />
         </section>

         <Footer />
      </React.Fragment>
   );
};

const imageUrl = 'https://image.tmdb.org/t/p/w300';

export { MoviePage };
