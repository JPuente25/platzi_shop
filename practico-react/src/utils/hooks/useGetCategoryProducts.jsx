import React from 'react';
import { axiosGet } from '../api';

const useGetCategoryProducts = (id) => {
   const [ categoryProducts, setCategoryProducts ] = React.useState(); //MAIN STATE WILL BE EXPORTED AS DATA
   const [ loading, setLoading ] = React.useState(true); //LOADER

   React.useEffect( async () => { //AXIOS GET REQUEST: GETS ALL PRODUCTS BY CATEGORY
      try {
         const { data, status } = await axiosGet(`/categories/${id}/products`);
         if(status === 200) {
            setCategoryProducts(data); //MAIN DATA
            setLoading(false); //LOADER
         }
      } catch (error) {
         setCategoryProducts(error); //MANAGE ERRORS
         setLoading(false); //LOADER
      }
   }, [id]);

   return { categoryProducts, loading };
};

export { useGetCategoryProducts };