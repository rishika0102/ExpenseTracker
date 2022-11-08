import React, {useState, useEffect} from 'react';
import Expense from './Expense';
import TransactionHistory from './TransactionHistory';
import TransactionForm from './TransactionForm';
import { uniqueId } from '../utils'

const transactionData = [
  { id: uniqueId(), name: 'Salary', amount: 770000 , type: 'income'}
];

function ExpenseTracker() {

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState(transactionData);

  const calculatedExpense = () => {
    let income = 0, expense = 0;

    transactions.forEach((data) => {
      if(data.type === 'income') {
        income+=data.amount;
      } else if(data.type === 'expense') {
        expense+=data.amount
      }
    });

    saveState();
    setIncome(income);
    setExpense(expense);
  }

  const handleAddNewTransaction = transaction => {
    let newTransaction = [...transactions, transaction];
    setTransactions(newTransaction);
  }

  const handleDeleteTransaction = id => {
    const newTransaction = transactions.filter((item) => item.id != id);
    setTransactions(newTransaction);
  }

  const saveState = () => {
    localStorage.setItem('expensetrackerState', JSON.stringify(transactions))
  }

  // useEffect(() => {
  //   let localState = JSON.parse(localStorage.getItem('expensetrackerState'));
  //   if(localState) {
  //     debugger
  //     setTransactions(localState);
  //     console.log("setTransactions", transactions);
  //   } else {
  //     calculatedExpense();
  //   }
  // }, [])

  useEffect(() => {
    calculatedExpense();
  }, [transactions]);

  return(
    <div>
      <h1>Expense Tracker</h1>
      <Expense income={income} expense={expense}/>
      <TransactionHistory transactions={transactions} onDeleteTransaction={handleDeleteTransaction}/>
      <TransactionForm onNewTransaction={handleAddNewTransaction}/>
    </div>
  )
}

export default ExpenseTracker
