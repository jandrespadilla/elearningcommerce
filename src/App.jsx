import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TituloApp from './components/TituloApp';
import NadBarCategorias from './components/NavBar/NatBar';

function App() {
  return (
    <div className="App fondo" style={{backgroundColor : 'red'}}>
        <TituloApp/>
      <NadBarCategorias/>
     
     
      
       
    </div>
    
  );
}

export default App;
