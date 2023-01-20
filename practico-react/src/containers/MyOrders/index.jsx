import React from 'react';
import { Order } from '../../components/Order';
import { OrderContainer, Title } from '../../components/Order/index.styles';
import { Context } from '../../context/context';

const MyOrders = () => {
   const { state } = React.useContext(Context);

   const myOrders = [ //AT THE MOMENT, ONLY TAKES 1 ORDER PACKAGE.
      [...state.cart],
   ];
   
   return (
      <OrderContainer>
         <Title>My Orders</Title>
         <OrderContainer>
            {myOrders.map((order, i) => 
               <Order key={i} shoppingCart={order} />)}
         </OrderContainer>
      </OrderContainer>
   );
};



export { MyOrders };
