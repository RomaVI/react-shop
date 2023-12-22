import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { CartContext } from "../contexts/CartContext";
import ItemCounter from "../components/itemCounter";

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();

    const { onAdd } = useContext(CartContext);


    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });
        })
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



    const add = (quantity) => {
        onAdd(item, quantity);

    }


    return (<>
        <div className="itemSBLOQUE">
            <div className="subCard subCardDet">
                <div className="tamCardTitle tamCardTitleDet">
                    <p>PRODUCTO NUEVO</p>
                </div>
                <div className="TamCardApuntar TamCardApuntarDet"></div>
            </div>
            <img className="itemSPicture" src={item.pictureUrl2} />
            <div className="subItemSBLOQUE">
                <h2 className="itemSTitle">{item.title}</h2>
                <p className="ItemSDescriptionCort">Pañuelo de sarga de seda estampado</p>
                <p className="carritoOscuro">P:{item.price} €  S: {item.cantidad}</p>
                <p className="iva"> IVA no incluido</p>
                <div className="ItemsCarrito">
            <div className="carritoItems" > <ItemCounter initial={1} stock={item.cantidad} onAdd={add} /></div>
        </div>
                <p className="ItemSDescription">{item.descriptiomext}</p>
                <p className="ItemSDescription">{item.descriptiomsub}</p>
            </div>
        </div>
        
    </>
    );

};