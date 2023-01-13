import React from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "./fetchApi";

const useTrendingMovies = () => {
   const params = useParams();
   const [page, setPage] = React.useState(params.page);
   const [trendingMovies, setTrendingMovies] = React.useState(null);

   React.useEffect(() => {
      const getTrendingMovies = async () => {
         try {
            const { data, status } = await fetchApi.get("/trending/movie/day", {
               params: {
                  page: page,
               }, 
            });
            if(status === 200) {
                setTrendingMovies(data)
            }
         } catch (error) {
            setTrendingMovies(error);
         }
      }
      getTrendingMovies();
   }, [page]);
   return {trendingMovies, page, setPage};
};

export { useTrendingMovies };
