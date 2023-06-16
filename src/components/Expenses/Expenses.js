import React from "react";
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import  "./Expenses.css";
const Expenses = ({expenses}) => {
    return(
        <div className="expenses">
    {
    expenses.map(item=>(
  <ExpenseItem data = {item}/>
    )
    )
    }
  </div>
    ) 
    
}
export default Expenses


