import React from 'react';
import { Button } from '../../components/Button/index.styled';
import { Card } from '../../components/Card';
import { OrderContainer, Title } from '../../components/Order/index.styles';
import { TitleContainer, TotalBox } from './index.styled';


const CheckoutOrder = ({order}) => {
   const totalPrice = myOrder.reduce((a, b) => a + b.price, 0); //CALCULATES TOTAL PRICE
   
   return (
      <OrderContainer>
         <TitleContainer>
            <div>
               <p>{'<'}</p>
            </div>
            <Title className='oneOrder'>My Order</Title>
         </TitleContainer>

         <OrderContainer type="oneOrder">
            {myOrder.map(item => 
               <Card 
                  article={item} 
                  type='order' 
                  key={item.id}/>
            )}

            <TotalBox>
               <p>Total</p>
               <p>${totalPrice}</p>
            </TotalBox>

            <Button>Checkout</Button>
         </OrderContainer>
      </OrderContainer>
   );
};

const myOrder = [
   {
      description: 'Bike',
      price: 30,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 1,
   },
   {
      description: 'Bike',
      price: 30,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 2,
   },
   {
      description: 'Bike',
      price: 30,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      id: 3,
   },
];

export { CheckoutOrder };