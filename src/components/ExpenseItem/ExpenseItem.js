import React,{useState} from "react";
import ExpenseDate from '.././ExpenseDate/ExpenseDate';
import './ExpenseItem.css'
import Card from "../UI/Card";
const ExpenseItem = ({data}) => {
  const [title, setTitle] = useState(data.title);
  const clickHandler = () => {
    setTitle('Updated!');
    
  };

    return(
        <Card className="expense-item">
            <ExpenseDate date={data.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${data.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem