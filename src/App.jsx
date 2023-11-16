import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar.jsx';
import { ItemListCointainer } from './components/ItemListContainer.jsx';

function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
        <Route path="/" element={<ItemListCointainer/>} />
        <Route path="/Categoria/:id" element={<ItemListCointainer/>} />
        <Route path="/item/:id" element={<p>🐟</p>} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
    </Router>
  );
}

export default App


