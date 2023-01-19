import React from 'react';
import { Login } from '../../containers/Login';
import { Context } from '../../context/context';
import { StyledMain } from '../../styles/StyledMain';
import { errorCode, msgCode } from '../../utils/hooks/useInitialState';
import { Error, Msg } from './index.styled';

const LoginPage = () => {
   const { state, removeError, removeMsg } = React.useContext(Context);

   React.useEffect(() => {
      setTimeout(() => {
         removeError('001');
         removeMsg('A01');
      }, 3000);
   }, []);

   return (
      <StyledMain>
         {state.error.includes('001') && <Error>{errorCode['001']}</Error>}
         {state.msg.includes('A01') && <Msg>{msgCode['A01']}</Msg>}
         <Login/>
      </StyledMain>
   );
};

export { LoginPage };