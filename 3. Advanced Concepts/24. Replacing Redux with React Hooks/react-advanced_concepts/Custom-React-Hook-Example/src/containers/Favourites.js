import React from 'react';

import FavouriteItem from '../components/Favourites/FavouriteItem';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Favourites = (props) => {
   const state = useStore()[0];
   const favouriteProducts = state.products.filter(p => p.isFavourite);

   let content = <p className="placeholder">Got no favourites yet!</p>;

   if (favouriteProducts.length > 0) {
      content = (
         <ul className="products-list">
            {favouriteProducts.map(prod => (
               <FavouriteItem key={prod.id} id={prod.id} title={prod.title} description={prod.description}/>
            ))}
         </ul>
      );
   };

   return content;
};

export default Favourites;