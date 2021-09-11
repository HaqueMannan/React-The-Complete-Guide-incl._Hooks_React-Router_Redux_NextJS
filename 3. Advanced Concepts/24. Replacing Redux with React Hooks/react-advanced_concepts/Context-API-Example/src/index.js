import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import ProductsProvider from './context/products-context';

ReactDOM.render(
   <React.StrictMode>
      <ProductsProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ProductsProvider>
   </React.StrictMode>,
   document.getElementById('root')
);