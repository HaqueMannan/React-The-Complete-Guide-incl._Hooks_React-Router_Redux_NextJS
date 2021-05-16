import ExpenseItem from './components/ExpenseItem';

function App() {
   const expenses = [
      {id: 'e1', title: 'Toilet Paper', amount: 12.00, date: new Date(2021, 4, 16)},
      {id: 'e2', title: 'TV', amount: 345.99, date: new Date(2021, 3, 30)},
      {id: 'e3', title: 'Car Insurance', amount: 745.36, date: new Date(2021, 4, 15)},
      {id: 'e4', title: 'New Desk (Wood)', amount: 400.00, date: new Date(2021, 4, 12)}
   ];

   return (
      <div>
         <h2>Hello World</h2>
         <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
         <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
         <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
         <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
      </div>
   );
};

export default App;