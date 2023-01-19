import React from 'react';
import { ArticlesContainer, More, OrderContainer, Title, Total } from './index.styles';
import { Card } from '../Card';
import { getDateFormatted } from '../../utils/functions/getDateFormatted';
import { Context } from '../../context/context';
import { CardSkeleton } from '../skeletons/CardSkeleton';

const Order = () => {
   const { state } = React.useContext(Context);
   const [showMore, setShowMore] = React.useState(false);
   const price = state.cart.reduce((a, b) => {
      return a + b.price;
   }, 0);

   const date = getDateFormatted();

   const qty = state.cart.length;

   const onShowMore = () => {
      setShowMore(prev => !prev)};

   return (
      <OrderContainer>
         <Total>
            <div>
               <p>{date}</p>
               <p>{qty} articles</p>
            </div>
               <p>${price}</p>
               <More onClick={onShowMore} showMore={showMore.toString()}>
                  <p>{'>'}</p>
               </More>
         </Total>

         {showMore && <ArticlesContainer>
            {state.cart.map((item) => (
               <Card
                  key={item.id}
                  type="order"
                  article={item}
               />
            ))}
         </ArticlesContainer>}
      </OrderContainer>
   );
};



export { Order };
