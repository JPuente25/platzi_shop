import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes';
import { Provider } from './context/context';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.render(
   <Provider>
      <GlobalStyle />
      <App />
   </Provider>,
   document.getElementById('root')
);

