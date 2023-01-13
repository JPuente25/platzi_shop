import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../Category';
import { ItemCard } from '../ItemCard';
import './index.css';

const ItemContainer = ({ title, textButton, item, data, setId }) => {
   const navigate = useNavigate();

   const goTrends = () => {
      navigate('/trends/1');
   }

   return (
      <section className="item-container">
         <div className="item-header">
            {title && <h2 className="item-title">{title}</h2>}
            {textButton && 
            <button 
               className="item-btn"
               onClick={goTrends}
            >{textButton}</button>}
         </div>

         <article 
            className={
               `${item === 'movies' && 'item-list--movies'}
                ${item === 'category' && 'item-list--category'}`}
         >
            {data &&
               item === 'movies' &&
               data.map((movie, i) => (
                  <ItemCard
                     key={i}
                     data={movie}
                     setId={setId}
                  />
               ))}

            {data &&
               item === 'category' &&
               data.map((category, i) => (
                  <Category
                     key={i}
                     data={category}
                  />
               ))}
         </article>
      </section>
   );
};

export { ItemContainer };
