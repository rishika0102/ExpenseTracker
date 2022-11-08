import React from 'react'

function TransactionHistory({transactions, onDeleteTransaction}) {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {
          transactions.map((data) => <div className="history-data"><li className="data-details" key={data.id}>{data.name}</li><li className="delete-transaction"> ${data.amount}<button onClick={ () => onDeleteTransaction(data.id)}>Delete</button></li></div>)
        }
      </ul>
    </div>
  )
}

export default TransactionHistory
