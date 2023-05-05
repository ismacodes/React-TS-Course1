import React, { useState } from "react";

const Pizza = () => {
    const [pizza, setPizza] = useState({
        name: "Spicy Pepperoni",
        toppings: ["Mushroom"],
    });

    const handleClick = () => {
        setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
    };

    return (
        <>
            <button onClick={handleClick}>Pizza</button>
            <ul>
                {pizza.toppings.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        </>
    );
};

export default Pizza;
