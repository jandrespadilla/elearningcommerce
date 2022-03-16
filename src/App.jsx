import { BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NadBarCategorias from './components/NavBar/NatBar';
import ItemsListConteiner from './conteainers/ItemsListConteiner/ItemsListConteiner'
import ItemsDetailConteiner from './conteainers/ItemsDetailConteiner/ItemsDetailConteiner'
import {CartContext} from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <CartContext.provider value = {{}} >
    <BrowserRouter>
        <div className="App fondo" style={{backgroundColor : 'red'}}>
        <NadBarCategorias titulo='Mercurso'/>
        <Routes>
            <Route path='/' element={<ItemsListConteiner categoriaHome='6' greeting='Cargando..'/>}></Route>
            <Route path='/tienda/:categoriaId/:categoriaName' element={<ItemsListConteiner greeting='Cargando..'/>}></Route>
            <Route path='/detalle/:cursoId/:cantidad' element={<ItemsDetailConteiner greeting='Cargando..'/>}></Route>
            <Route path='/cart' element={<Cart greeting='Cargando'/>}></Route>
            <Route path='/*' element={ <Navigate to='/'></Navigate>}></Route>
          </Routes>
        </div>
    </BrowserRouter>
    </CartContext.provider>
  );
}

export default App;
