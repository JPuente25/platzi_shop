import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card';
import { CardSkeleton } from '../../components/skeletons/CardSkeleton';
import { StyledMain } from '../../styles/StyledMain';
import { useGetProductById } from '../../utils/hooks/useGetProductById';

const Article = () => {
   const params = useParams();
   const { product, loading } = useGetProductById(parseInt(params.id));
   const error = product?.name === 'AxiosError';

   console.log(product);
   return (
      <StyledMain>
         {!error && !loading && <Card type='fullview' article={product}/>}
         
         {!error && loading && <CardSkeleton type='fullview' />}
         {error && <p>{product.message}</p>}
      </StyledMain>
   );
};

export { Article };