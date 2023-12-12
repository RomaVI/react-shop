import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"

import { products } from "../data/products";
import { CartContext } from "../contexts/CartContext";

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();

    const { addItem} = useContext(CartContext);
    console.log(id);
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
        promise
            .then((response) => {
                const filteredItem = response.find((product) => product.id == id);
                setItem(filteredItem);
            });
    }, [id]);
    if (!item) {
        return <div className="loading"><ul className="ulloa">
            <li className="liloa"></li>
            <li className="liloa"></li>
            <li className="liloa"></li>
            <li className="liloa"></li>
            <li className="liloa"></li>
        </ul></div>;
    }






    return (
        <div className="itemSBLOQUE">
            <img className="itemSPicture" src={item.pictureUrl2} />
            <div className="subItemSBLOQUE">
                <h2 className="itemSTitle">{item.title}</h2>
                <p className="ItemSDescription">{item.descriptiomext}{item.descriptiomsub}</p>
            </div>
            <div className="ItemsCarrito">
                <button onClick={()=> addItem(item) }>Agregar al carrito</button>
            </div>
        </div>);
};