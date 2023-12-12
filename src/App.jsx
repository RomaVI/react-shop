import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar.jsx';
import { ItemListContainer } from './components/ItemListContainer.jsx';
import { ItemDetailsContainer } from './components/ItemDetailsContainer.jsx';
import ItemBusqueda from './components/ItemBusqueda.jsx';
import { CartProvider } from './contexts/CartContext.jsx';
import { Cart } from './components/Cart.jsx';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Busqueda' element={<ItemBusqueda />} />
          <Route path="*" element={<p>Error 404</p>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;




