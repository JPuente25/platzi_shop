import React from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "./fetchApi";

const useMovieOrSimilar = ({ similar = false}) => {
   const params = useParams();
   const [movieId, setMovieId] = React.useState(params.id);
   const getSimilar = (() => 
      similar ? '/similar' : ''
   )();

   const [movieOrSimilar, setMovieOrSimilar] = React.useState(null);

   React.useEffect(() => {
      console.log('render useeffect')
      const getMovieOrSimilar = async () => {
         try {
            const { data, status } = await fetchApi.get(`/movie/${movieId}${getSimilar}`);
            if(status === 200) {
                setMovieOrSimilar(data)
            }
         } catch (error) {
            setMovieOrSimilar(error);
         }
      }
      getMovieOrSimilar();
   }, [movieId]);

   return {movieOrSimilar, movieId, setMovieId};
};

export { useMovieOrSimilar };