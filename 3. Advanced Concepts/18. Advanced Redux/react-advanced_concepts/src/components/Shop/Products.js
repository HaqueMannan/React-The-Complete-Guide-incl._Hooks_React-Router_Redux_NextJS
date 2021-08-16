import React from 'react';

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
   {
      id: 'p1',
      price: 6,
      title: '1984',
      description: '1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of \'the Party\', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. \'Big Brother\' controls every aspect of people\'s lives.'
   },
   {
      id: 'p2',
      price: 5,
      title: 'How to Kill a Mockingbird',
      description: 'When Tom Robinson, one of the town\'s Black residents, is falsely accused of raping Mayella Ewell, a white woman, Atticus agrees to defend him despite threats from the community'
   },
];

const Products = (props) => {
   return (
      <section className={classes.products}>
         <h2>Buy your favourite products</h2>
         <ul>
            {DUMMY_PRODUCTS.map((product) => (
               <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
               />
            ))}
         </ul>
      </section>
   );
};

export default Products;