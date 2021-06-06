import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummy_expenses = [
   {id: 'e1', title: 'Toilet Paper', amount: 12.00, date: new Date(2021, 4, 16)},
   {id: 'e2', title: 'TV', amount: 345.99, date: new Date(2021, 3, 30)},
   {id: 'e3', title: 'Car Insurance', amount: 745.36, date: new Date(2021, 4, 15)},
   {id: 'e4', title: 'New Desk (Wood)', amount: 400.00, date: new Date(2021, 4, 12)}
];

const App = () => {
   const [expenses, setExpenses] = useState(dummy_expenses);

   const addExpenseHandler = expense => {
      setExpenses(previousExpenses => {
         return [expense, ...previousExpenses];
      });
   };

   return (
      <div>
         <NewExpense onAddExpense={addExpenseHandler} />
         <Expenses items={expenses} />
      </div>
   );
};

export default App;