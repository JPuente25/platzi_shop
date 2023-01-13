import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const SearchField = () => {
   const navigate = useNavigate();
   const [value, setValue] = React.useState('');

   const goSearch = () => {
      navigate(`/search/${value}/1`);
   };

   const onChange = (e) => {
      setValue(e.target.value);
   };

   return (
      <form
         onSubmit={goSearch}
         className="header-searchForm"
      >
         <input
            value={value}
            type="text"
            placeholder="..."
            onChange={onChange}
            required
         />
         <button type="submit">🔍</button>
      </form>
   );
};

export { SearchField };
