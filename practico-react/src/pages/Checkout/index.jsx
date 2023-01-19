import React from 'react';
import { CheckoutOrder } from '../../containers/CheckoutOrder';
import { StyledMain } from '../../styles/StyledMain';

const Checkout = () => {
   return (
      <StyledMain>
         <CheckoutOrder />
      </StyledMain>
   );
};

export { Checkout };