import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NadBarCategorias() {
    const handleSelect = (eventKey) => alert(`Selecciono ${eventKey}`);
  
    return (
      <Nav variant="pills" activeKey="1" style={{backgroundColor : 'red'}}  onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="Inicio" >
            Inicio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link    eventKey="Nosotros"   title="Nosotros">
            Nosotros
          </Nav.Link>
        </Nav.Item>

        <NavDropdown   title="Categorias" id="nav-dropdown">
           <NavDropdown.Item eventKey="React">React</NavDropdown.Item>
           <NavDropdown.Item eventKey="JavaScript">JavaScript</NavDropdown.Item>
           <NavDropdown.Item eventKey="Desarrollo Web">Desarrollo Web</NavDropdown.Item>
           <NavDropdown.Item eventKey="PHP">PHP</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link  eventKey="Contacto"   title="Contacto">
            Contacto
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  
export default NadBarCategorias
 