import React from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "./fetchApi";

const useSearchMovies = ({query}) => {
   const params = useParams();
   const [page, setPage] = React.useState(params.page);
   const [searchMovies, setSearchMovies] = React.useState(null);

   React.useEffect(() => {
      const getSearchMovies = async () => {
         try {
            const { data, status } = await fetchApi.get("/search/movie", {
               params: {
                  query: query,
                  page: page,
               }, 
            });
            if(status === 200) {
                setSearchMovies(data)
            }
         } catch (error) {
            setSearchMovies(error);
         }
      }
      getSearchMovies();
   }, [page]);

   return {searchMovies, page, setPage};
};

export { useSearchMovies };