import React, { useState } from 'react';

export const ProductsContext = React.createContext({
   products: [],
   toggleFav: (id) => {}
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
   const [productsList, setProductsList] = useState([
      {
         id: 'p1',
         title: 'Red Scarf',
         description: 'A pretty red scarf.',
         isFavourite: false
      },
      {
         id: 'p2',
         title: 'Blue T-Shirt',
         description: 'A pretty blue t-shirt.',
         isFavourite: false
      },
      {
         id: 'p3',
         title: 'Green Trousers',
         description: 'A pair of lightly green trousers.',
         isFavourite: false
      },
      {
         id: 'p4',
         title: 'Orange Hat',
         description: 'Street style! An orange hat.',
         isFavourite: false
      }
   ]);

   const toggleFavourite = (productId) => {
      setProductsList(currentProdList => {
         const prodIndex = currentProdList.findIndex(p => p.id === productId);
         const newFavStatus = !currentProdList[prodIndex].isFavourite;
         const updatedProducts = [...currentProdList];
         updatedProducts[prodIndex] = {
            ...currentProdList[prodIndex],
            isFavourite: newFavStatus
         };

         return updatedProducts;
      });
   };

   return(
      <ProductsContext.Provider value={{products: productsList, toggleFav: toggleFavourite}}>
         {props.children}
      </ProductsContext.Provider>
   );
};