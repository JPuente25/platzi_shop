import React from 'react';
import { CartIcon } from '../../assets/icons/CartIcon';
import {
   ButtonP,
   CardContainer,
   CardImg,
   CardInfo,
   CloseIconContainer,
   DescriptionContainer,
   ParagraphContainer,
} from './index.styled';
import { CartBox } from '../NavBar/index.styled';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import { isArticleAdded } from '../../utils/functions/isArticleAdded';
import { CloseIcon } from '../../assets/icons/CloseIcon';

const Card = ({ article, type = 'card' }) => {
   const { state, addToCart, deleteFromCart } = React.useContext(Context);
   const navigate = useNavigate();
   const price = article?.price;
   const title = article?.title;
   const image = article?.images[0];
   const productId = article?.id;

   const articleAdded = isArticleAdded({
      id: productId,
      cart: state.cart,
   });

   const openProduct = () => {
      if (type === 'card') navigate(`/${article?.id}`);
   };

   const onCart = () => {
      articleAdded ? deleteFromCart(article.id) : addToCart(article);
   };

   const defaultImage = (e) =>{
      e.target.src = 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg';
   }

   return (
      <CardContainer type={type}>   
         <CardImg
            src={image}
            alt={title}
            type={type}
            className={type}
            onClick={openProduct}
            onError={defaultImage}
         />

         <CardInfo type={type}>
            <ParagraphContainer
               type={type}
               className="p-cont">
               {type === 'order' && <p className="title">{title}</p>}
               <p className="price">${price}</p>
               {type !== 'order' && <p className="title">{title}</p>}
            </ParagraphContainer>

            {type === 'fullview' && (
               <DescriptionContainer>
                  <p>
                     With its practical position, this bike also fulfills a decorative function, add
                     your hall or workspace.
                  </p>
               </DescriptionContainer>
            )}

            <CartBox
               className="card"
               type={type}
               onClick={onCart}
               added={articleAdded.toString()}>
               <CartIcon
                  width="25px"
                  height="25px"
               />
               {type === 'fullview' && (
                  <ButtonP
                     added={articleAdded.toString()}
                     onClick={onCart}>
                     {articleAdded ? 'Delete from Cart' : 'Add to Cart'}
                  </ButtonP>
               )}
            </CartBox>
         </CardInfo>
         {type === 'order' && (
            <CloseIconContainer onClick={onCart}>
               <CloseIcon />
            </CloseIconContainer>
         )}
      </CardContainer>
   );
};

export { Card };
