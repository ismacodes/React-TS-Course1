import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
    uploadExpense: (
        id: number,
        description: string,
        amount: number,
        category: string
    ) => void;
}

const schema = z.object({
    description: z
        .string({
            invalid_type_error: "Description field is required.",
        })
        .min(1, { message: "Description field is required." }),

    amount: z
        .number({ invalid_type_error: "Amount field is required." })
        .min(1, { message: "Amount must be at least $1." }),
    category: z.string({
        required_error: "The category field is required.",
    }),
    // .refine((value) => {
    //     return value !== "DEFAULT";
    // }, "You must select a Category"),
});

type FormData = z.infer<typeof schema>;

const Form = ({ uploadExpense }: Props) => {
    const {
        register,
        handleSubmit,
        formState,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        uploadExpense(data.id, data.description, data.amount, data.category);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input
                    {...register("description")}
                    id="description"
                    type="text"
                    className="form-control"
                />
                {errors.description && (
                    <p className="text-danger">{errors.description.message}</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input
                    {...register("amount", { valueAsNumber: true })}
                    id="amount"
                    type="number"
                    className="form-control"
                />
                {errors.amount && (
                    <p className="text-danger">{errors.amount.message}</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                <select
                    {...register("category")}
                    id="category"
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue={"DEFAULT"}
                >
                    <option value="DEFAULT"></option>
                    <option value="groceries">Groceries</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </div>
            <button className="btn btn-primary mb-5" type="submit">
                Submit
            </button>
        </form>
    );
};

export default Form;
