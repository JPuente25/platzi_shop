import React from 'react';
import { Form } from '../Login/index.styled';
import { Button } from '../../components/Button/index.styled';
import { H1 } from '../Recovery/index.styled';
import { Context } from '../../context/context';
import { Navigate } from 'react-router-dom';
import { Field, Input, Label } from '../../components/InputField/index.styled';
import { useUpdateUser } from '../../utils/hooks/useUpdateUser';
import { Error, Msg } from '../../pages/Login/index.styled';
import { Container } from './index.styled';

const ExistingAccount = () => {
   const { state } = React.useContext(Context);
   const [tempData, setTempData] = React.useState(state.userData);
   const [existData, setExistData] = React.useState(null);

   const { updateUser, loading } = useUpdateUser(existData); //UPDATES AN USER GIVEN (HOOK API)

   const onCreateUser = (e) => { //ON SUBMIT, SAVES DATA FROM FORMULARY TO STATE
      e.preventDefault();
      setExistData(tempData);
   };

   const onNameChange = (e) => { //HANDLE NAME INPUT
      setTempData({
         ...tempData,
         name: e.target.value,
      });
   };

   const onPasswordChange = (e) => { //HANDLE PASSWORD INPUT
      setTempData({
         ...tempData,
         password: e.target.value,
      });
   };
   return (
      <Container>
         {updateUser?.email 
            ? <Msg>Datos Actualizados con exito</Msg> 
            : <Error>{updateUser?.response.data.message}</Error> 
         }

         <H1 className="left">My account</H1>

         <Form onSubmit={onCreateUser}>
            <div>
               <Field>
                  <Label htmlFor="name">Name</Label>

                  <Input
                     name="name"
                     type="text"
                     id="name"
                     placeholder={tempData?.name}
                     value={tempData?.name}
                     required
                     onChange={onNameChange}
                  />
               </Field>

               <Field>
                  <Label htmlFor="email">Email</Label>

                  <Input
                     name="email"
                     type="email"
                     id="email"
                     placeholder={state.userData?.email}
                     disabled
                  />
               </Field>

               <Field>
                  <Label htmlFor="password">Password</Label>

                  <Input
                     name="password"
                     type="password"
                     id="password"
                     placeholder={tempData?.password}
                     value={tempData?.password}
                     required
                     onChange={onPasswordChange}
                  />
               </Field>
            </div>

            <Button
               type="submit"
               disabled={loading}
               className={'edit'}>
               {loading ? 'Loading...' : 'Edit'}
            </Button>
         </Form>
      </Container>
   );
};

export { ExistingAccount };
