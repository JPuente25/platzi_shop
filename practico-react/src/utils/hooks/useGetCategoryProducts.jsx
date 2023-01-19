import React from 'react';
import { axiosGet } from '../api';

const useGetCategoryProducts = (id) => {
   const [ categoryProducts, setCategoryProducts ] = React.useState();
   const [ loading, setLoading ] = React.useState(true);

   React.useEffect( async () => {
      try {
         const { data, status } = await axiosGet(`/categories/${id}/products`);
         if(status === 200) {
            setCategoryProducts(data);
            setLoading(false);
         }
      } catch (error) {
         setCategoryProducts(error);
      }
   }, [id]);

   return { categoryProducts, loading };
};

export { useGetCategoryProducts };