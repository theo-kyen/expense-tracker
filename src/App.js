import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Expenses from "./components/Expenses";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [expenses, setExpenses] = useState([]);

  // delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  const addExpense = (expense) => {
    const id = expenses.length + 1;
    const newExpense = {id, ...expense};
    setExpenses([...expenses, newExpense]);
  }

  return (
    <div className="container">
      <Header />
      <button
        type="button"
        className="viewform-button"
        style={{ cursor: "pointer" }}
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close Form' : 'View Form'}
      </button>
      {showForm && <Form onAdd={addExpense}/>}
      {expenses.length > 0 && <p>My Expenses</p>}
      <Expenses expenses={expenses} onDelete={deleteExpense}/>
    </div>
  );
}

export default App;
