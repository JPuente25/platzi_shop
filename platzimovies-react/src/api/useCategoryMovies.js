import React from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "./fetchApi";

const useCategoryMovies = ({id}) => {
   const params = useParams();
   const [page, setPage] = React.useState(params.page);
   const [categoryMovies, setCategoryMovies] = React.useState(null);

   React.useEffect(() => {
      const getCategoryMovies = async () => {
         try {
            const { data, status } = await fetchApi.get("/discover/movie", {
               params: {
                  with_genres: id,
                  page: page,
               }, 
            });
            if(status === 200) {
                setCategoryMovies(data)
            }
         } catch (error) {
            setCategoryMovies(error);
         }
      }
      getCategoryMovies();
   }, [page]);

   return {categoryMovies, page, setPage};
};

export { useCategoryMovies };