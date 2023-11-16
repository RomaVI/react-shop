import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import { products } from "../data/products";
import { ItemList } from "./ItemList";

export const ItemListCointainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const promise = new Promise((resolve, reject)  =>{
        setTimeout(() =>{
            resolve(products);
        }, 9000);
    });
        promise
        .then((response) => {
            setItems(response);
        })
        .finally(() => {setLoading(false);});
    }, []);
    return (
        <Container className="mt-4">
            <h2>Lista</h2>
            <ItemList items={items}/>
        </Container>
    );
};


