import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TituloApp from './components/TituloApp';
import NadBarCategorias from './components/NavBar/NatBar';

function App() {
  return (
    <div className="App" style={{backgroundColor : 'red'}}>
      <NadBarCategorias/>
        <TituloApp/>
      soy app
       <input type="text" />
     
    </div>
    
  );
}

export default App;
