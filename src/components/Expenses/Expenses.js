import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from './ExpensesList';
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangHandler = (selectedYear) => {
    console.log("Expense.js");
    setFilteredYear(selectedYear);
  };

  const filteredExpenes = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangHandler}
        />
        <ExpensesChart expenses = {filteredExpenes} />
        <ExpensesList items = {filteredExpenes}/>
        {/* 2nd way to render the list dynamically 
         {filteredExpenes.length === 0 && <p>No Expenes Found.</p>}
        {filteredExpenes.length > 0 &&
          filteredExpenes.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* 1st way to render the list dynamically 
        {filteredExpenes.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          filteredExpenes.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
         */}
      </Card>
    </div>
  );
};

export default Expenses;
