import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchField } from '../SearchField';
import './index.css';

const Header = ({arrow, title, search, background = {backgroundImage: "none"}, long = false}) => {
   const navigate = useNavigate();

   const goHome = () => {
      navigate('/');
   }

   return (
      <header 
         className={`header-container ${long && 'header-container--long'}`}
         style={background && {backgroundImage: `url(${background})`}}
      >{arrow && 
         <span 
            onClick={goHome}
            className="header-arrow"
         >&lt;</span>}
         {title && <h1 className="header-title">{title}</h1>}
  
         {search && <SearchField />}
      </header>
   );
};

export { Header };