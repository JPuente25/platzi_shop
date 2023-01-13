import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css';

const Category = ({data}) => {
   const navigate = useNavigate();
   const title = data.name;
   const id = data.id;

   const onCategory = () => {
      navigate(`/category/${title}/${id}/1`);
   }

   return (
      <React.Fragment>
         {data
            ? <div 
                  className="category"
                  onClick={onCategory}
               >
                  <h3 className="category-title">{title}</h3>
               </div>
            : <div className="category-skeleton"></div>
         }
      </React.Fragment>
   );
}

export { Category };