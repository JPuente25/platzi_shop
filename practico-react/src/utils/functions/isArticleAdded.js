export const isArticleAdded = ({id, cart}) => (
   Boolean(cart?.find((item) => item.id === id))
);