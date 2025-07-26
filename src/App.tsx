import React, { useState } from "react";

import ExpenseTable from "./components/ExpenseTable";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [expenseList, setExpenseList] = useState([
    { id: 1, description: "abc", amount: 30, category: "Rent" },
    { id: 2, description: "afdv", amount: 30, category: "Rent" },
    { id: 3, description: "gfdbf", amount: 30, category: "Rent" },
    { id: 4, description: "dffd", amount: 30, category: "Rent" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenseList.filter((e) => e.category === selectedCategory)
    : expenseList;

  const handleDelete = (id: number) => {
    setExpenseList(expenseList.filter((e) => e.id != id));
  };
  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSumbit={(newExpense) =>
            setExpenseList([
              ...expenseList,
              { ...newExpense, id: expenseList.length + 1 },
            ])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={handleCategoryFilter}></ExpenseFilter>
      </div>
      <ExpenseTable
        expenseList={visibleExpenses}
        onDelete={handleDelete}
      ></ExpenseTable>
    </div>
  );
};

export default App;
