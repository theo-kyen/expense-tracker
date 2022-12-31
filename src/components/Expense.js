import React from "react";
import { FaTimes } from "react-icons/fa";

const Expense = ({ expense, onDelete }) => {
  return (
    <div className="expense">
      <h3>
        {expense.name}
        <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(expense.id)} />
      </h3>
      <p>location: {expense.location}</p>
      <p>date: {expense.date}</p>
      <p>amount: {expense.amount}</p>
    </div>
  );
};

export default Expense;
