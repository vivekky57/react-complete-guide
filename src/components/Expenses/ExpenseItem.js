import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  //   const expenseDate = new Date(2022, 3, 25);
  //   const expenseTitle = "car Insurance";
  //   const expenseAmount = 294.66;

  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by react");

  const clickHandler = () => {
    setTitle("Upadated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
