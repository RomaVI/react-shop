import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import { products } from "../data/products";
import { ItemList } from "./ItemList";

export const ItemListCointainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
    console.log(id);
    useEffect(() =>{
        const promise = new Promise((resolve, reject)  =>{
        setTimeout(() =>{
            resolve(products);
        }, 1500);
    });
        promise
        .then((response) => {
            if(id){
                const filteres = response.filter((item) => item.category === id);
                setItems(filteres);
            }else{
                setItems(response);
            }
        })
        .finally(() => {setLoading(false);});
    }, [id]);
    return (
        <Container className="cardBockItem">
            <h2>Lista</h2>
            <ItemList items={items}/>
        </Container>
    );
};


