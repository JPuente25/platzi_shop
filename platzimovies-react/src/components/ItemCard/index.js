import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css';

const ItemCard = ({data, setId = () => {}}) => {
   const navigate = useNavigate();
   const onMovie = () => {
      setId(data.id);
      navigate(`/movie/${data.id}`);
   };
   return (
         <div className="card">
            <div onClick={onMovie}>
               {data
                  ? <img src={`${imageUrl}${data.poster_path}`}/>
                  : <div className="card-skeleton"></div>
               }
            </div>
            <button 
               className="card-like"
               disabled={!data}
            >V</button>
         </div>
   );
}

const imageUrl = 'https://image.tmdb.org/t/p/w300';

export { ItemCard };