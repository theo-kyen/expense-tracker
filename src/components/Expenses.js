import React from "react";
import Expense from "./Expense";

const Expenses = ({ expenses, onDelete }) => {
  return (
    <>
      {expenses.map((e) => (
        <Expense key={e.id} expense={e} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Expenses;
