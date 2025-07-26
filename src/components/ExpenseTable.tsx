import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenseList: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseTable = ({ expenseList, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {expenseList.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expenseList
              .reduce((acc, Expense) => Expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
      <tr></tr>
    </table>
  );
};

export default ExpenseTable;
