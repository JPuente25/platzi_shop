import React from 'react';
import { Card } from '../../components/Card';
import { CardSkeleton } from '../../components/skeletons/CardSkeleton';
import { GridContainer } from './index.styled';

const ArticleContainer = ({products, loading}) => {
   const skeletonProducts = new Array(20).fill();
   return (
      <GridContainer>
         {!loading
            ? products.map((article) => 
            <Card 
               key={article.id} 
               article={article}
               loading={loading}/>)

            : skeletonProducts.map((e, i) => <CardSkeleton key={i} type='card' />)}
      </GridContainer>
   );
};

export { ArticleContainer };