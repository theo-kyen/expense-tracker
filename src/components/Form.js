import React from "react";
import { useState } from "react";

const Form = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);

  function isEmpty() {
    return !name || !location || !date;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEmpty()) {
      alert("You are missing some components");
      console.log(name.value);
      return;
    }

    onAdd({ name, location, date, amount });

    setName("");
    setLocation("");
    setDate("");
    setAmount(0);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name of Expense</label>
        <input
          type="text"
          placeholder="add name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          placeholder="add location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          placeholder="add date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          placeholder="add amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <input type="submit" className="button" value="Save Expense" />
    </form>
  );
};

export default Form;
