import { useState } from 'react';

export const useCart = () => {
    const [items, setItems] = useState([]);

    const clear = () => setItems([]);

    const onAdd = (item, quantity) => {
        const existe = items.some((i) => i.id === item.id);

        if (existe) {
            const itemsActualizados = items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
            );
            setItems(itemsActualizados);
        } else {
            setItems((prev) => [...prev, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        const nuevosItems = items.filter((prev) => prev.id !== id);
        setItems(nuevosItems);
    };

    return { items, clear, onAdd, removeItem };
};
