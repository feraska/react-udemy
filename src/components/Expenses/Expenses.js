import React,{useState} from "react";
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import  "./Expenses.css";
import Card from "../UI/Card";
const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

    return(
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {
    expenses.map(item=>(
  <ExpenseItem data = {item} key={item.title}/>
    )
    )
    }
  </Card>
    ) 
    
}
export default Expenses


