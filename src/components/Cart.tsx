import React, { useState } from "react";

const Cart = () => {
    const [cart, setCart] = useState({
        discount: 0.1,
        items: [
            { id: 1, title: "Product 1", quantity: 1 },
            { id: 2, title: "Product 2", quantity: 1 },
        ],
    });

    const handleClick = () => {
        setCart({
            ...cart,
            items: cart.items.map((item) =>
                item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
            ),
        });
    };

    return (
        <div>
            <div>Cart</div>
            {cart.items.map((item) => {
                return (
                    <div>
                        <p>{item.title}</p>
                        <p>{item.quantity}</p>
                    </div>
                );
            })}
            <button onClick={handleClick}>Add 1 more</button>
        </div>
    );
};

export default Cart;
