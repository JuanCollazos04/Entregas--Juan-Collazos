import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './complements/ItemDetailContainer/ItemDetailContainer';
import  ItemListContainer  from './complements/ItemListContainer/ItemListContainer';
import NavBar from './complements/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer Bienvenidos={"Productos"} />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
