import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { products } from "../data/products";
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

        // Simulando una llamada a una API con un retardo
        await new Promise(resolve => setTimeout(resolve, 1500));

        const response = [...products]; // Haciendo una copia de los productos originales

        if (id) {
          const filtered = response.filter((item) => item.category === id);
          setItems(filtered);
        } else {
          setItems(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const filterItemsByTitle = () => {
      if (searchTerm.trim() === "") {
        // Si el término de búsqueda está vacío, mostrar todos los elementos
        setItems(products);
      } else {
        // Filtrar elementos por título
        const filteredItems = items.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setItems(filteredItems);
      }
    };

    filterItemsByTitle();
  }, [searchTerm, items]); // Elimina 'id' de las dependencias ya que no se utiliza aquí

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Container className="container pagBusqueda">
        
        <div className="titleDoble">
          <input
            type="text"
            id="searchQuery"
            placeholder="ENKI PRUDUCT"
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
