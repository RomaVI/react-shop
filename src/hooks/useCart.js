import {  useState } from 'react';

export const useCart = () => {
    const [items, setItems] = useState([]);

    const clear = () => setItems([]);

    const addItem = (item) => 
    setItems((prev) => {
        return [...prev, item];
    });

    console.log(items);
    
    return ({addItem, clear ,items});
}