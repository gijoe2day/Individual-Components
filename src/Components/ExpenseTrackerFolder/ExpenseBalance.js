import React, { useContext } from "react";
import { GlobalContext } from "../ExpenseTrackerFolder/Context/GlobalState";

export const ExpenseBalance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Income</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
};
