import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.css';

const Pagination = ({ data, type, page, setPage }) => {
   const navigate = useNavigate();
   const params = useParams();
   const pathFormat = {
      'trends': `/trends/`,
      'category': `/category/${params.name}/${params.id}/`,
      'search': `/search/${params.query}/`,
   };

   const totalPages = data?.total_pages;
   const actualPage = data?.page;
   const maxNumberOfButtons = 10;
   const halfWayNumber = maxNumberOfButtons / 2;
   const numberOfButtons = Math.min(totalPages, maxNumberOfButtons) || 10;

   const firstButtonNumber = () =>
      actualPage < halfWayNumber || totalPages < maxNumberOfButtons
         ? 1
         : actualPage > totalPages - halfWayNumber
         ? totalPages - maxNumberOfButtons + 1
         : actualPage - halfWayNumber + 1 || 1;

   const buttons = new Array(numberOfButtons)
      .fill()
      .map((number, index) => firstButtonNumber() + index);

   const prevPage = () => {
      setPage(prev => prev - 1);
      navigate(`${pathFormat[type]}${page - 1}`);
   }

   const nextPage = () => {
      setPage(prev => prev + 1);
      navigate(`${pathFormat[type]}${page + 1}`);
   }

   const numberPage = (pageNum) => {
      setPage(pageNum);
      navigate(`${pathFormat[type]}${pageNum}`);
   }

   return (
      <div className="pagination">
         <button 
            className='pagination-prev'
            onClick={prevPage}
            disabled={actualPage === 1}
         >Previous</button>
         {buttons.map((number, i) => (
            <button 
               className='pagination-button'
               onClick={() => numberPage(number)}
               key={i}
            >{number}</button>
         ))}
         <button
            className='pagination-next'
            onClick={nextPage}
            disabled={actualPage === totalPages}
         >Next</button>
      </div>
   );
};

export { Pagination };
