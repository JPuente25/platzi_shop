import React from "react";
import { ItemCard } from "../ItemCard";

const LikesContainer = ({title}) => {
   return (
      <section className="likes-container">
         <div className="likes-header">
            <h2 className="likes-title">{title}</h2>
         </div>

         <article className="likes-list">
            <ItemCard />
         </article>
      </section>
   );
}
   

export { LikesContainer };