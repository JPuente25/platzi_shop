import React from 'react';
import { axiosGet } from '../api';

const useGetProductById = (id) => {
   const [product, setProduct] = React.useState(null); //MAIN STATE WILL BE EXPORTED AS DATA
   const [loading, setLoading] = React.useState(true); //LOADER
   React.useEffect( async () => { //AXIOS GET REQUEST: GET A PRODUCT BY HIS ID
      try {
         const {data, status} = await axiosGet(`/products/${id}`);

         if(status === 200) {
            setProduct(data); //MAIN DATA
            setLoading(false); //LOADER
         }

      } catch (error) {
         setProduct(error); //MANAGE ERRORS
         setLoading(false); //LOADER
      }
   }, []);

   return { product, loading };
};

export { useGetProductById };