import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import { departmentList } from '../NavBar';
import { MenuContainer, Ul, StyledLink} from './index.styled';


const Modal = () => {
   const navigate = useNavigate();
   const { setUserTokens, setUserData, toggleOrders, toggleModal } = React.useContext(Context);

   const onOrders = () => {
      (window.innerWidth >= 640)
         ? onToggleOrders()
         : openOrdersPage()
   };

   const openOrdersPage = () => {
      navigate('/orders');
   };

   const onToggleOrders = () => {
      toggleOrders();
   };

   const closeMenu = () => {
      toggleModal();
   };

   const signOut = () => {
      toggleModal();
      localStorage.clear();
      setUserTokens(null);
      setUserData(null);
   };

   return (
      <MenuContainer>
         <h1>CATEGORIES</h1>
         <Ul>
            {departmentList.map(item => 
                  <StyledLink 
                     key={item.id.toString(16)} 
                     className='category'
                     onClick={closeMenu}
                     to={`${item.path}/${item.id}`}
                  >{item.text}</StyledLink >
            )}</Ul>
         <Ul>
            <StyledLink className='menu' onClick={onOrders}>My Orders</StyledLink>
            <StyledLink className='menu' onClick={closeMenu} to='/account'>My Account</StyledLink>
            <StyledLink className='menu' onClick={signOut} to='/login'>Sign out</StyledLink>
         </Ul>
      </MenuContainer>
   );
};

export { Modal };