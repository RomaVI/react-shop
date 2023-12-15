import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"
import { getFirestore, getDoc, doc} from "firebase/firestore";

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
            setItem({id: snapshot.id, ...snapshot.data() });
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
            <img className="itemSPicture" src={item.pictureUrl2} />
            <div className="subItemSBLOQUE">
                <h2 className="itemSTitle">{item.title}</h2>
                <p className="ItemSDescription">{item.descriptiomext}</p>
                <p className="ItemSDescription">{item.descriptiomsub}</p>
            </div>
        </div>
            <div className="ItemsCarrito">
    
                <ItemCounter  initial={1} stock={item.cantidad} onAdd={add}/>
            </div>
    </>
    );
    
};