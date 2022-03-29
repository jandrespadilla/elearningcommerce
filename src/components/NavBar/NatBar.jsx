import Nav from 'react-bootstrap/Nav';
import './NatBar.css'
import { Navbar } from 'react-bootstrap';
import React from 'react';
import { getCategorias } from '../../helpers/getCategorias'
import NavDropdown from 'react-bootstrap/NavDropdown';
import TituloApp from '../TituloApp/TituloApp';
import CartWidget from '../CartWidget/CartWidget';
//import LogoWidget from '../LogoWidget/LogoWidget';
import { NavLink } from 'react-router-dom';
import { useEffect , useState } from 'react'
import logo from '../../img/logo192.png'
import { useCartContext } from '../../context/cartContext';

function NadBarCategorias(titulo) {
    const [cursos, setCursos] = useState([])
    const {acumuladorCart} = useCartContext()
    
   useEffect(() => {
            getCategorias.then(
                (data) => {
                    setCursos(data)
                }  
            ).catch(
            )
          
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
                        { cursos.map((categorias) => 
                                <NavDropdown.Item className='textColor' key={categorias.id} >
                                    <NavLink to={{
                                            pathname:'/tienda/'+categorias.id+'/'+categorias.name.toLowerCase()                                             
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
 