import Nav from 'react-bootstrap/Nav';
import './NatBar.css'
import { Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TituloApp from '../TituloApp';
function NadBarCategorias() {
    const funEvento = (eventKey) => alert(`Selecciono ${eventKey}`);
  
    return (
        <Navbar.Brand  href="/">
            <img src="./logo192.png" alt="MerCursos"/>
            <TituloApp/>
            <Nav variant="pills" activeKey="1" className='fondoNav '  onSelect={funEvento}>
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
                    <NavDropdown.Item className='textColor' eventKey="React">React</NavDropdown.Item>
                    <NavDropdown.Item className='textColor' eventKey="JavaScript">JavaScript</NavDropdown.Item>
                    <NavDropdown.Item className='textColor' eventKey="Desarrollo Web">Desarrollo Web</NavDropdown.Item>
                    <NavDropdown.Item className='textColor' eventKey="PHP">PHP</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                <Nav.Link className='textColor' eventKey="Contacto"   title="Contacto">
                    Contacto
                </Nav.Link>
                </Nav.Item>
            </Nav>
      </Navbar.Brand>
    );
  }
  
export default NadBarCategorias
 