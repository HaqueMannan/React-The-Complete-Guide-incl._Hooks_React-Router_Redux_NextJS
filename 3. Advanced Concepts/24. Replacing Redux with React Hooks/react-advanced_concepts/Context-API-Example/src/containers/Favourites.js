import React, { useContext } from 'react';

import FavouriteItem from '../components/Favourites/FavouriteItem';
import { ProductsContext } from '../context/products-context';
import './Products.css';

const Favourites = (props) => {

   const favouriteProducts = useContext(ProductsContext).products.filter(p => p.isFavourite);

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