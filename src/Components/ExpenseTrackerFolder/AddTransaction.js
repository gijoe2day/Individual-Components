import React, { useState, useContext } from "react";
import { GlobalContext } from "../ExpenseTrackerFolder/Context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form">
          <label htmlFor="text">
            <h5 className="text-primary">Name of Income or Expense:</h5>
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form">
          <label htmlFor="amount">
            <h5 className="text-primary">
              Write amount: (-amount) if an Expense
            </h5>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn btn-primary">Add transaction</button>
      </form>
    </div>
  );
};
