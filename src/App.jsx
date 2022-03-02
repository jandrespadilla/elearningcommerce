import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NadBarCategorias from './components/NavBar/NatBar';
import ItemsList from './conteainers/ItemsList/ItemsList'

function App() {
  return (
    <div className="App fondo" style={{backgroundColor : 'red'}}>
       
      <NadBarCategorias/>
     <ItemsList greeting='Saludos'/>
   
      
       
    </div>
    
  );
}

export default App;
