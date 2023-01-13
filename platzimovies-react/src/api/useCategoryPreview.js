import React from "react";
import { fetchApi } from "./fetchApi";

const useCategoryPreview = () => {
   const [categoryPreview, setCategoryPreview] = React.useState(null);

   React.useEffect(() => {
      const getCategoryPreview = async () => {
         try {
            const { data, status } = await fetchApi.get("/genre/movie/list");
            if(status === 200) {
                setCategoryPreview(data)
            }
         } catch (error) {
            setCategoryPreview(error);
         }
      }
      getCategoryPreview();
   }, []);

   return {categoryPreview};
};

export { useCategoryPreview };