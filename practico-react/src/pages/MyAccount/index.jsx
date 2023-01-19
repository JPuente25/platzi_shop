import React from 'react';
import { ExistingAccount } from '../../containers/ExistingAccount';
import { StyledMain } from '../../styles/StyledMain';

const MyAccount = () => {
   return (
      <StyledMain>
         <ExistingAccount />
      </StyledMain>
   );
};

export { MyAccount };