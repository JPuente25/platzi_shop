import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { black, hospital_green, sm, very_light_pink, white } from '../../styles/GlobalStyle';

export const MenuContainer = styled.div`
   height: auto;
   border: 1px solid ${very_light_pink};
   border-radius: 6px;
   padding: 20px 20px 0 20px;
   max-width: 200px;
   position: absolute;
   background-color: ${white};
`;

export const Ul = styled.ul`
   display: flex;
   flex-direction: column;
   list-style: none;
   padding: 0;
   margin: 0;
   margin-left: 20px;
`;

export const StyledLink = styled(Link)`
   color: ${black};
   text-decoration: none;
   margin-bottom: 20px;
   display: inline-block;
   text-align: end;
   font-weight: bold;

   &:nth-last-child(1) {
      color: ${hospital_green};
      font-size: ${sm};
      border-top: 1px solid ${hospital_green};
      padding-top: 20px;
   }

   &:nth-last-child(2) {
      display: none;
   }

   &:nth-last-child(2).big {
      display: block;
      color: ${very_light_pink};
      font-size: 12px;
   }
`;
