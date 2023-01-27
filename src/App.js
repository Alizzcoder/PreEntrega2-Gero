import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Colecciones from './pages/Colecciones/Colecciones';
import Jarrones from './pages/Jarrones/Jarrones';
import Platos from './pages/Platos/Platos';
import Tazas from './pages/Tazas/Tazas';
import Detail from './pages/Detail/Detail';
import Error from './pages/Error/Error';

import NavBar from './Components/Navbar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
          <Route path = '*' element = { <Error/> } />
          <Route path = '/' element = {<Home/>} />
          <Route path = 'detail' element = {<Detail/>} />
          <Route path = '/productos' element = {<ItemListContainer/>} />
          <Route path = 'Jarrones' element = {<Jarrones/>} />
          <Route path = 'Colecciones' element = {<Colecciones/>} />
          <Route path = 'Platos' element = {<Platos/>} />
          <Route path = 'Tazas' element = {<Tazas/>} />
          <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
      </Routes> 
    
    </BrowserRouter>
  );
}

export default App;
