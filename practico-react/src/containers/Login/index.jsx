import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button/index.styled';
import { Form, ForgotLink, ErrorAuth } from './index.styled';
import { useAuth } from '../../utils/hooks/useAuth';
import { Context } from '../../context/context';
import { errorCode } from '../../utils/hooks/useInitialState';

const Login = () => {
   const navigate = useNavigate();
   const [userInfo, setUserInfo] = React.useState(null);
   const { auth, setRender } = useAuth(userInfo); 
   const { state, clearError } = React.useContext(Context);
   
   const goSignup = () => {
      navigate('/account/new');
   }
   
   const getFormData = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = {
         email: formData.get('email'),
         password: formData.get('password'),
      }
      setUserInfo(data);
      setRender(data);
   }

   return (
         <Form onSubmit={getFormData}>
            <InputField 
               label={{text: 'Email Address', htmlFor: 'email'}}
               input={{type: 'email', placeholder: 'platzi@example.com'}}
            />

            <InputField 
               label={{text: 'Password', htmlFor: 'password'}}
               input={{type: 'password', placeholder: '***********'}}
            />
            {state.error.includes('002') && <ErrorAuth>{errorCode['002']}</ErrorAuth>}
   
            <Button>Log In</Button>
            <ForgotLink to='/recovery/sent'>Forgot my password</ForgotLink>

            <Button className='signup' onClick={goSignup}>Sign up</Button>
         </Form>
   );
};

export { Login };

