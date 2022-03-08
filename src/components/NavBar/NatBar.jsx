import Nav from 'react-bootstrap/Nav';
import './NatBar.css'
import { Navbar } from 'react-bootstrap';
//https://jorgeandrespadilla.com.ar/mod/webservice/rest/server.php?wstoken=83453b9a2f882545cef25f1b361d2103&wsfunction=core_course_get_courses_by_field&field=category&value=3&moodlewsrestformat=json
import { getFech } from '../../helpers/getFech'
import NavDropdown from 'react-bootstrap/NavDropdown';
import TituloApp from '../TituloApp/TituloApp';
import CartWidget from '../CartWidget/CartWidget';
//import LogoWidget from '../LogoWidget/LogoWidget';
import { useEffect , useState } from 'react'


function NadBarCategorias() {
    const [cursos, setCursos] = useState([])
    

   useEffect(() => {
    getFech.then(
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
                        { cursos.map((curso) => 
                                <NavDropdown.Item className='textColor' key={curso.id} eventKey={curso.name}>{curso.name}</NavDropdown.Item>
                        )}
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link className='textColor' eventKey="Contacto"   title="Contacto">
                        Contacto
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link className='textColor ' eventKey="Inicio" >
                            <CartWidget />   
                    </Nav.Link>
                </Nav.Item>                
            </Nav>
      </Navbar.Brand>
    );
  }
  
export default NadBarCategorias
 