import React from 'react';       // Modern React project setups allows you to omit this import statement from the Component code.
import Expenses from './components/Expenses/Expenses';

// function App() {
//    const expenses = [
//       {id: 'e1', title: 'Toilet Paper', amount: 12.00, date: new Date(2021, 4, 16)},
//       {id: 'e2', title: 'TV', amount: 345.99, date: new Date(2021, 3, 30)},
//       {id: 'e3', title: 'Car Insurance', amount: 745.36, date: new Date(2021, 4, 15)},
//       {id: 'e4', title: 'New Desk (Wood)', amount: 400.00, date: new Date(2021, 4, 12)}
//    ];

//    return (
//       <div>
//          <h2>Hello World</h2>
//          <Expenses items={expenses} />
//       </div>
//    );

//    // The JSX code above gets converted/transformed under the hood to the below code (it requires the React object from the 'react' library in order to work). JSX is syntactic sugar:
//    // return React.createElement(
//    //    'div',
//    //    {},
//    //    React.createElement('h2', {}, 'Hello World'),
//    //    React.createElement(Expenses, {items: expenses})
//    // );
// };

// ES6 Arrow Function Syntax:
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