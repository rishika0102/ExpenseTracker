import React from 'react';

function Expense({income, expense}) {
  return (
    <div>
      <div>
        <h2>Your Balance</h2>
        <div className="result-value balance">${income - expense}</div>
       </div>
       <div>
        <div>
          <h2>Income</h2>
          <div className="result-value income">${income}</div>
        </div>
        <div>
          <h2>Expense</h2>
          <div className="result-value expense">${expense}</div>
        </div>
       </div>
    </div>
  )
}

export default Expense
