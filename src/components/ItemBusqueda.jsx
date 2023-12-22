import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { ItemList } from "./ItemList";

const ItemBusqueda = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const db = getFirestore();
        
        // Simulando una llamada a una API con un retardo
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const collectionRef = collection(db, "items");

        // Construir la consulta
        let queryRef = collectionRef;
        if (id) {
          // Filtrar por categoría si se proporciona
          queryRef = query(collectionRef, where("category", "==", id));
        }

        // Obtener los documentos según la consulta
        const response = await getDocs(queryRef);

        // Filtrar por título si hay un término de búsqueda
        const filteredItems = response.docs
          .map((item) => ({ id: item.id, ...item.data() }))
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          );

        setItems(filteredItems);
      } catch (error) {
        //console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); // Convertir a minúsculas
  };
  

  return (
    <>
      <Container className="container pagBusqueda">
        <div className="titleDoble">
          <input
            type="text"
            id="searchQuery"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <ItemList items={items} />
      </Container>
    </>
  );
};

export default ItemBusqueda;
