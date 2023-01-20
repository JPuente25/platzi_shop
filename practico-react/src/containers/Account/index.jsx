import React from 'react';
import { Form } from '../Login/index.styled';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button/index.styled';
import { H1 } from '../Recovery/index.styled';
import { useCreateUser } from '../../utils/hooks/useCreateUser';
import { Navigate } from 'react-router-dom';


//NOTA: LA API PARA CHECK SI UN EMAIL EXISTE NO FUNCIONA. ASI QUE SE HARA SIN ESTA VALIDACION
const Account = () => {
   const [userData, setUserData] = React.useState(null);

   const { createUser, loading } = useCreateUser(userData); //CREATES USER WITH DATA OBTAINED FROM FORMULARY

   const onCreateUser = (e) => { //SAVES DATA OBTAINED FROM FORMULARY
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = {
         name: formData.get('name'),
         email: formData.get('email'),
         password: formData.get('password'),
      };
      setUserData(data);
   };

   return (
         <div>
            {createUser?.email && <Navigate to='/login' />}
            <H1 className='left'>My account</H1>

            <Form onSubmit={onCreateUser}>
               <div>
                  <InputField 
                     label={{text: 'Name', htmlFor: 'name'}}
                     input={{type: 'text', placeholder: 'Michael'}}
                  />

                  <InputField 
                     label={{text: 'Email', htmlFor: 'email'}}
                     input={{type: 'email', placeholder: 'platzi@example.com'}}
                  />

                  <InputField 
                     label={{text: 'Password', htmlFor: 'password'}}
                     input={{type: 'password', placeholder: '**********'}}
                  />
               </div>

               <Button type="submit" disabled={loading} className={'create'}>{loading ? 'Loading...' : 'Create'}</Button>
            </Form>
         </div>
   );
};

export { Account };