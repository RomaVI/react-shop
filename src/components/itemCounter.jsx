import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

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
            <button onClick={handleAdd} aria-label="Agregar al Carrito" className="agrCarrito">AÑADIR AL CARRITO</button>
            <div className="Counter">
            <div><p>CANTIDAD:</p></div>
            <mark> {count}</mark>
            <div className="itemCounterFlechas">
            <button onClick={decrementCount} className="countAr" aria-label="Decrementar"><IoIosArrowDown /></button>
            <button onClick={incrementCount} className="countAr" aria-label="Incrementar"><IoIosArrowUp /></button>
            </div>
            </div>
        </div>
        </>
    );
};


export default ItemCounter;

