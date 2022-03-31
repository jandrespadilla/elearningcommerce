import Nav from 'react-bootstrap/Nav';
import './NatBar.css'
import { Navbar } from 'react-bootstrap';
import React ,{ useEffect , useState }  from 'react';
//import { getCategorias } from '../../helpers/getCategorias'
import NavDropdown from 'react-bootstrap/NavDropdown';
import TituloApp from '../TituloApp/TituloApp';
import CartWidget from '../CartWidget/CartWidget';
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo192.png'
import { useCartContext } from '../../context/cartContext';

function NadBarCategorias(titulo,greeting) {
    const [categorias, setCategorias] = useState([])
    const {acumuladorCart} = useCartContext()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            const db = getFirestore()
            const queryColection = collection(db, 'categorias')
            getDocs(queryColection)
            .then(resp => setCategorias( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 
       }, [])
    const funEvento = (eventKey) => alert(`Selecciono ${eventKey}`);
  
    return (
        <Navbar.Brand  >
            <img src={logo} alt={titulo}/>
            <TituloApp/>
            <Nav variant="pills" activeKey="1" className='fondoNav' style={{ width: "100%" }} onSelect={funEvento}>
                <Nav.Item>
                    <NavLink className='textColor ' to='/'>
                        Inicio
                    </NavLink> 
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='textColor'   eventKey="Nosotros"   title="Nosotros">
                        Nosotros
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown className='textColor'  title="Categorias" id="nav-dropdown">
                        { 
                        loading ? <h2>{greeting}</h2>
                        :                        
                        categorias.map((categoria) => 
                                <NavDropdown.Item className='textColor' key={categoria.id} >
                                    <NavLink to={{
                                            pathname:'/tienda/'+categoria.nombre                                             
                                            }} >
                                    {categoria.nombre}
                                    </NavLink>
                                </NavDropdown.Item>
                        )  } 
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link className='textColor' eventKey="Contacto"   title="Contacto">
                        Contacto
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                        <NavLink className='textColor ' to='/cart'>
                            <CartWidget />  
                        </NavLink> 
                        {
                        parseInt(acumuladorCart()) === 0 ? 
                            <></>
                        : 
                            <span style={{ background: 'red' }} >{acumuladorCart()}</span> 
                        }
                </Nav.Item>                
            </Nav>
      </Navbar.Brand>
    );
  }
  
export default NadBarCategorias