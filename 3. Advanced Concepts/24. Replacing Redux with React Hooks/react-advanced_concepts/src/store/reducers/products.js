import { TOGGLE_FAV } from '../actions/products';

const initialState = {
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
};

const productReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_FAV:
      const prodIndex = state.products.findIndex(p => p.id === action.productId);
      const newFavStatus = !state.products[prodIndex].isFavourite;
      const updatedProducts = [...state.products];

      updatedProducts[prodIndex] = {
         ...state.products[prodIndex],
         isFavourite: newFavStatus
      };

      return {
         ...state,
         products: updatedProducts
      };

      default:
      return state;
   };
};

export default productReducer;