import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

import { products } from "../data/products";

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        promise
            .then((response) => {
                const filteredItem = response.find((product) => product.id == id);
                setItem(filteredItem);
            });
    }, [id]);
    if (!item) {
        return <h2>loading</h2>;
    }
    


    return (
        <div>
            <h2>{item.title}</h2> 
            <img src={item.pictureUrl} />
            <p>{item.descriptiom}</p>
        </div>);
};