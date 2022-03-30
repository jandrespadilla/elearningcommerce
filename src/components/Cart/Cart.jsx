import './Cart.css'
 
import React , { useEffect , useState } from 'react'
import {  useCartContext } from '../../context/cartContext';
import { ListGroup ,ListGroupItem} from 'react-bootstrap';
import {  Link} from 'react-router-dom';
function Cart() {
    const {cartList,vaciarCarito,removeItem} = useCartContext()
 
    
    const [cursos, setCursos] = useState([])
    useEffect(() => {
        
    }, [cartList])

function generarCompra() {
     
     const items = cartList.map (list => {
            const id= list.id;
            const nombre= list.fullname;
            const precio= 100;
            return {'id':id,'nombre':nombre,'precio':precio}
          }
       )    
 const   orden = { 'buyer': { 'name':'andres', 'phone': '155','mail': 'email@gmail.com' }, 'items': [items], 'total': 1500  }
 console.log(orden);
}

    return (
        <>
        <ListGroup>
        { cartList.map((curso) =>
               
               <ListGroupItem key={curso.id}>Cod.: {curso.id} Nombre: {curso.name} Cantidad : {curso.cantidad} <button   key={curso.id}  onClick={() => removeItem(curso)} className="btn btn-outline-primary"  >Eliminar</button></ListGroupItem>
                        
                )}
         
          
         </ListGroup>
            {
            cartList.length===0 ?  
             <Link to={"/"} >  <button className="btn btn-outline-primary"  >Seguir Comprando</button> </Link> 
            :  
                <>  
                <button className="btn btn-outline-primary" onClick={vaciarCarito} >Vaciar Carro</button>
                <button className="btn btn-outline-primary" onClick={generarCompra} >Finalizar Compra</button> 
                </> 
            }

 
          


        

     </>
    )  
}

export default Cart