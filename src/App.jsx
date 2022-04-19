import { BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import React   from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NadBarCategorias from './components/NavBar/NatBar';
import ItemsListConteiner from './conteainers/ItemsListConteiner/ItemsListConteiner'
import ItemsDetailConteiner from './conteainers/ItemsDetailConteiner/ItemsDetailConteiner'
import CartContextProvider from './context/cartContext'
import Cart from './components/Cart/Cart'
import getFireStoreApp from './firebase/config';


getFireStoreApp()
function App() {
  return (
    <CartContextProvider>
      
   
    <BrowserRouter>
        <div className="App" >
        <NadBarCategorias greeting='Cargando' titulo='Mercurso'/>
        <Routes>
            <Route path='/' element={<ItemsListConteiner categoriesId='ofertas' greeting='Cargando..'/>}></Route>
            <Route path='/shopping/:categoriesHome' element={<ItemsListConteiner greeting='Cargando..'/>}></Route>
            <Route path='/detail/:courseId' element={<ItemsDetailConteiner greeting='Cargando..'/>}></Route>
            <Route path='/cart' element={<Cart greeting='Cargando'/>}></Route>
            <Route path='/*' element={ <Navigate to='/'></Navigate>}></Route>
          </Routes>
        </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
