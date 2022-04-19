import './NatBar.css'
import React ,{ useEffect , useState }  from 'react';
import {NavDropdown, Nav ,Container,Navbar} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { NavLink} from 'react-router-dom';
import logo from '../../img/logo192.png'
import { useCartContext } from '../../context/cartContext';
import TituloApp from '../TituloApp/TituloApp';

function NadBarCategories(title,greeting) {
    const [categories, setCategories] = useState([])
    const {accumulatorCart} = useCartContext()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            const db = getFirestore()
            const queryColection = collection(db, 'categorias')
            getDocs(queryColection)
            .then(resp => setCategories( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 
       }, [])
   
  
    return (
                <>
                <img src={logo} alt={title}/>
                <TituloApp/>
                <Navbar className='backgroundNav colapAling' collapseOnSelect expand="lg"  variant="dark">
                    
                <Container>
                
               
                <Navbar.Toggle aria-controls="responsive-navbar-nav spaceHome" />
                <Navbar.Collapse id="responsive-navbar-nav ">

                    <Nav ><NavLink className='textColor link '  to="/">Inicio</NavLink>   </Nav>    
                    <Nav className=' me-auto'>
                    <NavDropdown className='textColor link'  title="Categorias" id="nav-dropdown">
                        { 
                        loading ? <h2>{greeting}</h2>
                        :                        
                        categories.map((category) => 
                        
                                <NavLink   to={'/shopping/'+category.path}  style={{
                                    fontWeight: "bold",
                                    color: "rgb(13, 13, 75)"
                                  }} className=' textColor nav-link'  key={category.id} >
                                    
                                    {category.name}
                                     
                                </NavLink>
                        )  } 
                    </NavDropdown>          
                    </Nav>
                    
                     <Nav >
                        <NavLink className='textColor link'  to="cart"  >
                            { accumulatorCart() !== 0 &&  <span style={{ background: 'red' }} >{accumulatorCart()}</span>  }
                            <CartWidget />  
                        </NavLink> 
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </>


    );
  }
  
export default NadBarCategories