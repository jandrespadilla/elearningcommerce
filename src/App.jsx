import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NadBarCategorias from './components/NavBar/NatBar';
import ItemsListConteiner from './conteainers/ItemsListConteiner/ItemsListConteiner'
function App() {
  return (
    <div className="App fondo" style={{backgroundColor : 'red'}}>
       
      <NadBarCategorias/>
     <ItemsListConteiner greeting='Saludos'/>
     
      
       
    </div>
    
  );
}

export default App;
