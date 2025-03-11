import React from 'react'

function IncomeExpenses({calculateIncome,calculateExpenses}) {
  return (
    <>
      <div className=' flex justify-around'>
        <div>
            <h3 className='text-green-600'>Income</h3>
            <p className='text-2xl font-bold'> {calculateIncome}</p>
        </div>
        <div>
            <h3 className='text-red-600'>Expenses</h3>
            <p className='text-2xl font-bold'>{calculateExpenses}</p>
        </div>
      </div>
    </>
  )
}

export default IncomeExpenses;
