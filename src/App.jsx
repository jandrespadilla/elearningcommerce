import { BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NadBarCategorias from './components/NavBar/NatBar';
import ItemsListConteiner from './conteainers/ItemsListConteiner/ItemsListConteiner'
import ItemsDetailConteiner from './conteainers/ItemsDetailConteiner/ItemsDetailConteiner'
function App() {
  return (
    <BrowserRouter>
        <div className="App fondo" style={{backgroundColor : 'red'}}>
        <NadBarCategorias titulo='Mercurso'/>
        <Routes>
            <Route path='/' element={<ItemsListConteiner categoriaHome='6' greeting='Cargando..'/>}></Route>
            <Route path='/tienda/:categoriaId' element={<ItemsListConteiner greeting='Cargando..'/>}></Route>
            <Route path='/detalle/:cursoId/:cantidad' element={<ItemsDetailConteiner greeting='Cargando..'/>}></Route>
            <Route path='/carrito' element={<ItemsListConteiner greeting='Cargando'/>}></Route>
            <Route path='/*' element={ <Navigate to='/'></Navigate>}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
