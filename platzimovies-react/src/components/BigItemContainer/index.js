import React from "react";
import { ItemCard } from "../ItemCard";
import './index.css'

const BigItemContainer = ({data}) => {
   return (
      <section className="big-container">
         {data && 
         data.map((movie, i) =>
         <ItemCard key={i} data={movie}/>)}
      </section>
   );
};

export { BigItemContainer };