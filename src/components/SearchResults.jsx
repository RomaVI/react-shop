
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";


import { ItemList } from "./ItemList";

export const ItemListCointainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 1500);
        });
        promise
            .then((response) => {
                if (id) {
                    const filteres = response.filter((item) => item.category == id);
                    setItems(filteres);
                } else {
                    setItems(response);
                }
            })
            .finally(() => { setLoading(false); });
    }, [id]);






    return (
        <>
            <div className="fondo">  <img src="https://images.unsplash.com/photo-1585924756944-b82af627eca9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fondo artistico" /></div>
            <Container className="container">
                <div className="titleDoble"><h3>UN TOQUE EXCLUSIVO</h3></div>
                <h2 className="title">ENKI PRODUCT</h2>
                <div className="titleDoble"><h4>LA MEJOR EXPERIENCIA CON LA MEJOR CALIDAD</h4></div>
                <ItemList items={items} />
            </Container>
        </>
    );
};



const SearchResults = ({ results }) => {
    return (
        <ul>
            {results.map((result, index) => (
                <li key={index}>{result}</li>
            ))}
        </ul>
    );
};

export default SearchResults;