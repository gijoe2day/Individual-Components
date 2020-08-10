import React from "react";
import { ExpenseHeader } from "./ExpenseHeader";
import { ExpenseBalance } from "./ExpenseBalance";
import { ExpenseIncome } from "./ExpenseIncome";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { GlobalProvider } from "../ExpenseTrackerFolder/Context/GlobalState";

import "../../../src/AppExpense.css";
import "../../../src/indexExpense.css";

function MainExpense() {
  return (
    <GlobalProvider>
      <ExpenseHeader />

      <div className="container">
        <ExpenseBalance />
        <ExpenseIncome />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default MainExpense;
