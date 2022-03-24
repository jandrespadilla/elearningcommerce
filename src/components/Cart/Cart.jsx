import './Cart.css'
 
import React , { useEffect , useState } from 'react'
import {  useCartContext } from '../../context/cartContext';
import { ListGroup ,ListGroupItem} from 'react-bootstrap';
 
function Cart() {
    const {cartList,vaciarCarito,removeItem} = useCartContext()
 
    
    const [cursos, setCursos] = useState([])
    useEffect(() => {
        setCursos(cartList)
    }, [cartList])
    return (
        <>
        <ListGroup>
        { cursos.map((curso) =>
               
               <ListGroupItem key={curso.id}>Cod.: {curso.id} Nombre: {curso.fullname} Cantidad : {curso.cantidad} <button   key={curso.id}  onClick={() => removeItem(curso)} className="btn btn-outline-primary"  >Eliminar</button></ListGroupItem>
                        
                )}
         
          
         </ListGroup>
     <button className="btn btn-outline-primary" onClick={vaciarCarito} >Vaciar Carro</button>
     </>
    )  
}

export default Cart