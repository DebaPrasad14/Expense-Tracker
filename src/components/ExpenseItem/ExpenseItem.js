import React, { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { date, amount, title } = props.data;
  const [newTitle, setTitle] = useState(title);
  const clickHandler = () => {
    setTitle("updated");
    console.log("hello");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
