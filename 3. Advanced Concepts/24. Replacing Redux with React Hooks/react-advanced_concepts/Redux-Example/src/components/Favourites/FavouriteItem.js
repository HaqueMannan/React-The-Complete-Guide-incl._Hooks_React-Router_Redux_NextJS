import React from 'react';

import Card from '../UI/Card';
import './FavouriteItem.css';

const FavouriteItem = (props) => {
   return (
      <Card style={{ marginBottom: '1rem' }}>
         <div className="favourite-item">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
         </div>
      </Card>
   );
};

export default FavouriteItem;