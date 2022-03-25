import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  //   const expenseDate = new Date(2022, 3, 25);
  //   const expenseTitle = "car Insurance";
  //   const expenseAmount = 294.66;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
