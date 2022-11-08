import React, {useState} from 'react';
import {uniqueId} from '../utils'

function TransactionForm( {onNewTransaction} ) {

  const [nameValue, setNameValue] = useState('');
  const [amountValue, setAmountValue] = useState('');

  const addTransaction = (type, evt) => {
    evt.preventDefault();

    const data = {id: uniqueId(), name: nameValue, amount: parseInt(amountValue), type: type};
    console.log("data...", data);

    onNewTransaction(data);
  }

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form className="addNewTransaction">
        <label className="heading">
          Name
          <div>
            <input className="heading-name" type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)}/>
           </div>
        </label>
        <label className="heading amount-value">
          Amount
          <div>
            <input className="heading-name" type="number" value={amountValue} onChange={(e) => setAmountValue(e.target.value)}/>
           </div>
        </label>
        <div>
          <button className="add-details" onClick={(e) => addTransaction('income', e)}>Add Income</button>
          <button className="add-details" onClick={(e) => addTransaction('expense', e)}>Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default TransactionForm
