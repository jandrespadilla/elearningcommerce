import Nav from 'react-bootstrap/Nav';
import './NatBar.css'
import { Navbar } from 'react-bootstrap';
 
import { getCategorias } from '../../helpers/getCategorias'
import NavDropdown from 'react-bootstrap/NavDropdown';
import TituloApp from '../TituloApp/TituloApp';
import CartWidget from '../CartWidget/CartWidget';
//import LogoWidget from '../LogoWidget/LogoWidget';
import { NavLink } from 'react-router-dom';
import { useEffect , useState } from 'react'


function NadBarCategorias() {
    const [cursos, setCursos] = useState([])
    

   useEffect(() => {
    getCategorias.then(
        (data) => {
             
            setCursos(data)
       }  
    ).catch(
  
    )

   }, [])

    const funEvento = (eventKey) => alert(`Selecciono ${eventKey}`);
    const titulo = 'Mercurso'
    return (
        <Navbar.Brand  >
            <img src="./logo192.png" alt={titulo}/>
            <TituloApp/>
            <Nav variant="pills" activeKey="1" className='fondoNav justify-content-end' style={{ width: "100%" }} onSelect={funEvento}>
              
                <Nav.Item>
                    <Nav.Link className='textColor' eventKey="Inicio" >
                        Inicio
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='textColor'   eventKey="Nosotros"   title="Nosotros">
                        Nosotros
                    </Nav.Link>
                </Nav.Item>

                <NavDropdown className='textColor'  title="Categorias" id="nav-dropdown">
                        { cursos.map((categorias) => 
                                <NavDropdown.Item className='textColor' key={categorias.id} >
                                    <NavLink to={{
                                            pathname:'/tienda/'+categorias.id                                             
                                            }} >
                                    {categorias.name}
                                    </NavLink>
                                </NavDropdown.Item>
                        )} 
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link className='textColor' eventKey="Contacto"   title="Contacto">
                        Contacto
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                   
                        <NavLink className='textColor ' to='/carrito'>
                            <CartWidget />  
                        </NavLink> 
                     
                </Nav.Item>                
            </Nav>
      </Navbar.Brand>
    );
  }
  
export default NadBarCategorias
 