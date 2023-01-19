import React from 'react';
import { MenuContainer, Ul, StyledLink} from './index.styled';

const MenuModal = ({big = false}) => {

   return (
      <MenuContainer>
         <Ul>
            {menuLink.map(item => 
                  <StyledLink 
                     key={item.id} 
                     className={`link ${item.big && big && 'big'}`} 
                     to={item.path}
                  >{item.title}</StyledLink >
            )}
         </Ul>
      </MenuContainer>
   );
};

const menuLink = [
   {
      title: 'My Orders',
      path: '/',
      id: 1,
      big: false,
   },
   {
      title: 'My Account',
      path: '/account',
      id: 2,
      big: false,
   },
   {
      title: 'platzi@example.com',
      path: '/',
      id: 3,
      big: true,
   },
   {
      title: 'Sign out',
      path: '/',
      id: 4,
      big: false,
   },
]

export { MenuModal };