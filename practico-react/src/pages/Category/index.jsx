import React from 'react';
import { useParams } from 'react-router-dom';
import { ArticleContainer } from '../../containers/ArticleContainer';
import { MyOrders } from '../../containers/MyOrders';
import { Context } from '../../context/context';
import { StyledMain } from '../../styles/StyledMain';
import { useGetCategoryProducts } from '../../utils/hooks/useGetCategoryProducts';
import { MyOrdersContainer } from '../Home/index.styled';

const Category = () => {
   const params = useParams();
   const categoryId = params.id;
   const { state } = React.useContext(Context);

   const { categoryProducts, loading } = useGetCategoryProducts(categoryId);
   const error = categoryProducts?.name === 'AxiosError';

   return (
      <StyledMain type='home'>
         {!error && <ArticleContainer products={categoryProducts} loading={loading}/>}
         {error && <p>{categoryProducts.message}</p>}

         {state.orders && <MyOrdersContainer>
            <MyOrders/>
         </MyOrdersContainer>}
      </StyledMain>
   );
};

export { Category };