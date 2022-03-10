import { BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NadBarCategorias from './components/NavBar/NatBar';
import ItemsListConteiner from './conteainers/ItemsListConteiner/ItemsListConteiner'

function App() {
  return (
    <BrowserRouter>
        <div className="App fondo" style={{backgroundColor : 'red'}}>
        <NadBarCategorias/>
        <Routes>
            <Route path='/' element={<ItemsListConteiner categoriaHome='6' greeting='Cargando..'/>}></Route>
            <Route path='/tienda/:categoriaId' element={<ItemsListConteiner greeting='Cargando..'/>}></Route>
            <Route path='/carrito' element={<ItemsListConteiner greeting='Cargando'/>}></Route>
            <Route path='/*' element={ <Navigate to='/'></Navigate>}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
