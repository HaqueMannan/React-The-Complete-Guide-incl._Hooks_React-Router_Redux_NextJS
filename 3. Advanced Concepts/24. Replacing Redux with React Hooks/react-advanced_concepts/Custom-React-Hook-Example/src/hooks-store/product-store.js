import { initStore } from './store';

const configureStore = () => {
   const actions = {
      TOGGLE_FAV: (curState, productId) => {
         const prodIndex = curState.products.findIndex(p => p.id === productId);
         const newFavStatus = !curState.products[prodIndex].isFavourite;
         const updatedProducts = [...curState.products];
         updatedProducts[prodIndex] = {
            ...curState.products[prodIndex],
            isFavourite: newFavStatus
         };
         return { products: updatedProducts };
      }
   };

   initStore(actions, { 
      products: [
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
      ]
   });
};

export default configureStore;