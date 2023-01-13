import React from "react";
import { useCategoryPreview } from "../../api/useCategoryPreview";
import { useTrendingMovies } from "../../api/useTrendingMovies";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ItemContainer } from "../../components/ItemContainer";
import { LikesContainer } from "../../components/LikesContainer";

const HomePage = () => {
   const { trendingMovies } = useTrendingMovies({page: 1});
   const { categoryPreview } = useCategoryPreview();
   const trendingPreview = trendingMovies?.results;
   const allCategories = categoryPreview?.genres;

   return (
      <React.Fragment>
         <Header 
            title='PlatziMovies'
            arrow={false}
            search={true}
         />

         {/* Contenedor de peliculas trending en version Mini */}
         <ItemContainer 
            title='Trendings'
            textButton='More...'
            item='movies'
            data={trendingPreview}
         /> 
      
         {/* Contenedor de lista de categorias */}
         <ItemContainer 
            title='Categories'
            textButton={null}
            item='category'
            data={allCategories}
         />

         {/* Contenedor de peliculas favoritas */}
         <LikesContainer 
            title='Favorites Movies'
         />

         <Footer />
      </React.Fragment>
   );
};

export { HomePage };