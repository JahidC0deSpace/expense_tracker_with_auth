import React from 'react'

const ExpenseDetails = ({incomeAmt,expenseAmt}) => {
  return (
    <div>
        <div>
            Your Balance is {incomeAmt-expenseAmt}
        </div>
        <div className='amounts-container'>
            Income
            <span className='income-amounts'>{incomeAmt}</span>

            Expense
            <span className='expense-amounts'>{expenseAmt}</span>
        </div>
    </div>
  )
}

export default ExpenseDetails