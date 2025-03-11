import { useState } from 'react'
import './App.css'
import AddTransaction from './component/AddTransaction'
import Balance from './component/Balance'
import Header from './component/Header'
import IncomeExpenses from './component/IncomeExpenses'
import TransactionList from './component/TransactionList'

function App() {
  const [transactions,setTransactions] = useState([])
  const addTransaction =(transaction )=>{
    setTransactions([...transactions,transaction])
  }
  const calculateBalance =()=>{
    return transactions.reduce((acc,transaction)=> acc + transaction.amount   ,0 )
  }
  const calculateIncome = ()=>{
    return transactions
    .filter((transaction)=> transaction.amount >0)
    .reduce((acc,transaction)=>acc + transaction.amount , 0)
  }
  const calculateExpenses = ()=>{
    return transactions
    .filter((transaction)=> transaction.amount <0)
    .reduce((acc,transaction)=>acc + transaction.amount , 0)
  }
  return (
    <>
      <Header/>
      <Balance balance={calculateBalance()}/>
      <IncomeExpenses calculateIncome={calculateIncome()} calculateExpenses={calculateExpenses()}/>
      <TransactionList transactions={transactions}/>
      <AddTransaction addTransaction={addTransaction}/>
    </>
  )
}

export default App
