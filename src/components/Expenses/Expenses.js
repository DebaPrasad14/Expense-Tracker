import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem data={props.item[0]} />
      <ExpenseItem data={props.item[1]} />
      <ExpenseItem data={props.item[2]} />
      <ExpenseItem data={props.item[3]} />
    </Card>
  );
}

export default Expenses;
