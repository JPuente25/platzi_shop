import React from 'react';
import { useParams } from 'react-router-dom';
import { useTrendingMovies } from '../../api/useTrendingMovies';
import { useCategoryMovies } from '../../api/useCategoryMovies';
import { useSearchMovies } from '../../api/useSearchMovies';
import { BigItemContainer } from '../../components/BigItemContainer';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';

const PackMoviesPage = ({ type }) => {
   const params = useParams();

   const {
      trendingMovies,
      page: trendPage,
      setPage: setTrendPage,
   } = useTrendingMovies({ page: params.page });
   const {
      categoryMovies,
      page: catPage,
      setPage: setCatPage,
   } = useCategoryMovies({ id: params.id });
   const {
      searchMovies,
      page: seaPage,
      setPage: setSeaPage,
   } = useSearchMovies({ query: params.query, page: params.page });
   
   let data;
   let page;
   let setPage;
   if (type === 'trends') {
      data = trendingMovies;
      page = trendPage;
      setPage = setTrendPage;
   } else if (type === 'category') {
      data = categoryMovies;
      page = catPage;
      setPage = setCatPage;
   } else if (type === 'search') {
      data = searchMovies;
      page = seaPage;
      setPage = setSeaPage;
   }

   console.log(data);

   return (
      <React.Fragment>
         <Header
            arrow={typeProps[type].arrow}
            title={typeProps[type].title ?? params.name}
            search={typeProps[type].search}
         />

         <BigItemContainer data={data?.results} />

         <Pagination
            data={data}
            type={type}
            page={page}
            setPage={setPage}
         />

         <Footer />
      </React.Fragment>
   );
};

const typeProps = {
   trends: {
      arrow: true,
      title: 'Trendings',
      search: false,
   },
   category: {
      arrow: true,
      title: null,
      search: false,
   },
   search: {
      arrow: true,
      title: null,
      search: true,
   },
};

export { PackMoviesPage };
