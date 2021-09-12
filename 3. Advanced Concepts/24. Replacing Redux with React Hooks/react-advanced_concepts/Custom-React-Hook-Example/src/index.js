import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureProductsStore from './hooks-store/product-store';
import configureCounterStore from './hooks-store/counter-store';

configureProductsStore();
configureCounterStore();

ReactDOM.render(
   <React.StrictMode>
         <BrowserRouter>
            <App />
         </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);