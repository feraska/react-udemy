import React,{useState} from "react";
import ExpensesList from '../ExpensesList/ExpensesList'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import  "./Expenses.css";
import Card from "../UI/Card";
const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return(
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear}
           onChangeFilter={filterChangeHandler} />
           <ExpensesList items={filteredExpenses} />
   
  </Card>
    ) 
    
}
export default Expenses


