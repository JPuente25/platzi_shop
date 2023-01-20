import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArticleContainer } from '../../containers/ArticleContainer';
import { MyOrders } from '../../containers/MyOrders';
import { Context } from '../../context/context';
import { StyledMain } from '../../styles/StyledMain';
import { useGetProducts } from '../../utils/hooks/useGetProducts';
import { MyOrdersContainer } from './index.styled';

const Home = () => {
   const { state } = React.useContext(Context);
   const { products, loading } = useGetProducts();
   const error = products?.name === 'AxiosError'; //CREATES ERROR MSG IF THERE IS ANY ERROR
   return (
      <StyledMain type='home'>
         {!error && <ArticleContainer products={products} loading={loading}/>}
         {error && <p>{products.message}</p>}

         {state.orders && <MyOrdersContainer>
            <MyOrders/>
         </MyOrdersContainer>}
      </StyledMain>
   );
};

export { Home };