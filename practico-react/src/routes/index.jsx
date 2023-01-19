import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { LoginPage } from '../pages/Login';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { NewPassword } from '../pages/NewPassword';
import { MyAccount } from '../pages/MyAccount';
import { Orders } from '../pages/Orders';
import { EmailSentPage } from '../pages/SendEmail';
import { CreateAccount } from '../pages/CreateAccount';
import { Checkout } from '../pages/Checkout';
import { NotFound } from '../pages/NotFound';
import { Article } from '../pages/Article';
import { Category } from '../pages/Category';
import { Context } from '../context/context';
import { useGetUserSession } from '../utils/hooks/useGetUserSession';

const App = () => {
   const { state } = React.useContext(Context);
   const { loading } = useGetUserSession(state.userTokens?.access_token);
   const persistedTokens = JSON.parse(localStorage.getItem('sale_user_session'));
   return (
      <HashRouter>
         {(!loading || !persistedTokens) &&
         <React.Fragment>
            <NavBar/>
            <Routes>
               <Route path='/' element={state.userData ? <Home /> : <Navigate to='/login'/>} />
               <Route path='/:id' element={state.userData ? <Article /> : <Navigate to='/login'/>} />
               <Route path='/category/:id' element={state.userData ? <Category /> : <Navigate to='/login'/>} />
               <Route path='/login' element={!state.userData ? <LoginPage/> : <Navigate to='/'/>} />
               <Route path='/recovery/sent' element={!state.userData ? <EmailSentPage /> : <Navigate to='/'/>} />
               <Route path='/recovery/newpassword' element={state.userData ? <NewPassword /> : <Navigate to='/login'/>} />
               <Route path='/account' element={state.userData ? <MyAccount /> : <Navigate to='/login'/>} />
               <Route path='/account/new' element={<CreateAccount />} />
               <Route path='/orders' element={state.userData ? <Orders /> : <Navigate to='/login'/>} />
               <Route path='/orders/checkout' element={state.userData ? <Checkout /> : <Navigate to='/login'/>} />
               <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
         </React.Fragment>}
      </HashRouter>
   );
};

export { App };