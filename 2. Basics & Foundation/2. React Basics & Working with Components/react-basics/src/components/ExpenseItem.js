import './ExpenseItem.css';

function ExpenseItem() {
   return (
      <div className="expense-item">
         <div>15th May 2021</div>
         <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">£745.36</div>
         </div>
      </div>
   );
};

export default ExpenseItem;