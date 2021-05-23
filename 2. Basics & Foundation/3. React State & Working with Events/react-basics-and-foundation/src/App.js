import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App = () => {
   const expenses = [
      {id: 'e1', title: 'Toilet Paper', amount: 12.00, date: new Date(2021, 4, 16)},
      {id: 'e2', title: 'TV', amount: 345.99, date: new Date(2021, 3, 30)},
      {id: 'e3', title: 'Car Insurance', amount: 745.36, date: new Date(2021, 4, 15)},
      {id: 'e4', title: 'New Desk (Wood)', amount: 400.00, date: new Date(2021, 4, 12)}
   ];

   return (
      <div>
         <h2>Hello World</h2>
         <Expenses items={expenses} />
      </div>
   );
};

export default App;