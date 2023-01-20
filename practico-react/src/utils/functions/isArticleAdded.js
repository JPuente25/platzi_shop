export const isArticleAdded = ({id, cart}) => (
   Boolean(cart?.find((item) => item.id === id))
);

//CHECK IF AN ARTICLE IS ALREADY ON SHOPPING CART TO AVOID DUPLICATES