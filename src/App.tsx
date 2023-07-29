import React, { useState } from "react";
import Form from "./expense-tracker/components/Form";
import produce from "immer";
import Summary from "./expense-tracker/components/Summary";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

const App = () => {
    const handleUpload = (
        id: number,
        description: string,
        amount: number,
        category: string
    ) => {
        setExpenses(
            produce((draft) => {
                draft.push({
                    id: id,
                    description: description,
                    amount: amount,
                    category: category,
                });
            })
        );
    };

    const [expenses, setExpenses] = useState([
        { id: 0, description: "Milk", amount: 5, category: "Groceries" },
        { id: 1, description: "Eggs", amount: 5, category: "Groceries" },
        { id: 2, description: "Flour", amount: 5, category: "Groceries" },
        { id: 3, description: "Butter", amount: 5, category: "Groceries" },
    ]);

    const [filterCategory, setFilterCategory] = useState("");

    // const handleFilterChange = (category: string) => {
    //     setFilterCategory(category);
    //     setExpenses(
    //         expenses.filter((expense) => expense.category === filterCategory)
    //     );
    //     console.log(expenses);
    // };

    const visibleExpenses = filterCategory
        ? expenses.filter((exp) => exp.category === filterCategory)
        : expenses;

    return (
        <>
            <div className="mb-5">
                <ExpenseForm
                    onSubmit={(expense) =>
                        setExpenses([
                            ...expenses,
                            { ...expense, id: expenses.length + 1 },
                        ])
                    }
                />
            </div>

            <div className="mb-3">
                <ExpenseFilter
                    onSelectCategory={(category) => setFilterCategory(category)}
                />
            </div>

            <Summary
                expenses={visibleExpenses}
                onDelete={(id) => {
                    console.log("Hello form delete handler. Id:", id);
                    setExpenses(
                        expenses.filter((expense) => expense.id !== id)
                    );
                }}
            />
        </>
    );
};

export default App;
