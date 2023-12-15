import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const refCollection = id
                ? query(collection(db, "items"),where("categoryId", "==", id))
                : collection(db, "items");
                
                const querySnapshot = await getDocs(refCollection);

                if (querySnapshot.size === 0) {
                } else {
                    setItems(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    );
                }
            } catch (error) {
            alert("error");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            <div className="fondo">
                <img src="https://images.unsplash.com/photo-1585924756944-b82af627eca9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fondo artístico" />
            </div>
            <Container className="container">
                <div className="titleDoble">
                    <h3>EXCLUSIVOS ONLINE</h3>
                </div>
                <h2 className="title">ENKI PRODUCTS</h2>
                <div className="titleDoble">
                    <h4>MAS QUE UNA MARCA UN LIFESTYLE</h4>
                </div>
                {loading ? <p>Loading...</p> : <ItemList items={items} />}
            </Container>
        </>
    );
};

export default ItemListContainer;
