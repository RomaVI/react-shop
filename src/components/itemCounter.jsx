

import { useState } from "react";

export const ItemCounter = ({ initial, onAdd, stock }) => {
    const [count, setCount] = useState(initial);

    const decrementCount = () => {
        if (count > initial) setCount((c) => c - 1);
    };

    const incrementCount = () => {
        if (count < stock) setCount((c) => c + 1);
    };

    const handleAdd = () => {
        onAdd(count);
        setCount(initial);
    };
    
    return (
        <>
        <div className="itemCounter">
            <div><p>Stock: {stock}</p></div>
            <button onClick={decrementCount} aria-label="Decrementar">-</button>
            <mark>{count}</mark>
            <button onClick={incrementCount} aria-label="Incrementar">+</button>
        </div>
            <button onClick={handleAdd} aria-label="Agregar al Carrito">Agregar al Carrito</button>
        </>
    );
};


export default ItemCounter;

