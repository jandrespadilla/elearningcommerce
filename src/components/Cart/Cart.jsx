import './Cart.css'
import React,{useState}  from 'react'
import {  useCartContext } from '../../context/cartContext';
import { ListGroup ,ListGroupItem} from 'react-bootstrap';
import {  Link} from 'react-router-dom';
import { 
    addDoc, 
    collection, 
    documentId, 
    getDocs, 
    getFirestore, 
    query, 
    where, 
    writeBatch 
  } from "firebase/firestore"
  
function Cart() {
    const {cartList,vaciarCarito,removeItem,precioTotal} = useCartContext()
    const [id, setId] = useState('')

  

    const [dataForm, setDataForm] = useState({
        correo: '', nombre: '',apellido: '',  telefono: ''
      })
  

            const generarCompra= async (e)=>{
                e.preventDefault();
          
                let orden = {}      
                //orden.comprador = dataForm
                orden.items = cartList.map (list => {
                        const id= list.id;
                        const nombre= list.name;
                        const cantidad= list.cantidad;
                        const precio= list.price;
                        const total= parseInt(list.price)*parseInt(list.cantidad);
                        return {'id':id,'nombre':nombre,'precio':precio,'cantidad':cantidad,'total':total}
                    }
                )  
                orden.totalGeneral= precioTotal(); 
                const db = getFirestore()
                const queryCollectionClientes = collection(db, 'clientes')
                addDoc(queryCollectionClientes, dataForm)
                .then(resp =>  {
                    orden.complador = resp.id
                    const queryCollectionOrdenes = collection(db, 'ordenes')
                    addDoc(queryCollectionOrdenes, orden)
                    .then(resOrden => {setId(resOrden.id);})
                    .catch(err => console.error(err))
                    .finally(() => {console.log('termino ')})                
                
                })
                .catch(err => console.error(err))
                .finally(() => {console.log('termino '); vaciarCarito() }) 
                
                const queryCollection = collection(db, 'productos')

                const queryActulizarStock = await query(
                   queryCollection,  
                   where( documentId() , 'in', cartList.map(it => it.id) )          
                )

                const batch = writeBatch(db)

                await getDocs(queryActulizarStock)
                  .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                       stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
                }) ))

                batch.commit()
    



         
            }

            const handleChange = (e) => {
                setDataForm({
                  ...dataForm,
                  [e.target.name]: e.target.value
              })
            }
        
        

    return (
        <>

            {
            cartList.length===0 ?  
            <>
             { id==='' ? <></> : <p>Su compra se realizo con exito, su orden tiene el numero {id} </p> }
             <Link to={"/"} >  <button className="btn btn-outline-primary"  >Seguir Comprando</button> </Link> 
             
             </>
            :  
            <div>
                <ListGroup>
                    { cartList.map((curso) =>
                        <ListGroupItem key={curso.id}>Cod.: {curso.id} Nombre: {curso.name} Cantidad : {curso.cantidad} Precio : {parseInt(curso.price)*parseInt(curso.cantidad)} <button   key={curso.id}  onClick={() => removeItem(curso)} className="btn btn-outline-primary"  >Eliminar</button></ListGroupItem>
                    )}
                    <ListGroupItem key='total'> Total: {precioTotal()}</ListGroupItem>
                </ListGroup>

                <button className="btn btn-outline-primary" onClick={vaciarCarito} >Vaciar Carro</button>
                 <form onSubmit={generarCompra}  >
                    <input 
                        type='text' 
                        name='nombre' 
                        placeholder='Nombre' 
                        value={dataForm.nombre}
                        onChange={handleChange}
                    /><br />
                    <input 
                        type='text' 
                        name='apellido' 
                        placeholder='Apellido' 
                        value={dataForm.apellido}
                        onChange={handleChange}
                    /><br />                    
                    <input 
                        type='text' 
                        name='telefono'
                        placeholder='Telefono1' 
                        value={dataForm.telefono}
                        onChange={handleChange}
                    /><br/>
                    <input 
                        type='email' 
                        name='correo'
                        placeholder='Correo' 
                        value={dataForm.correo}
                        onChange={handleChange}
                    /><br/>
               
               
                <button className="btn btn-outline-primary"  >Finalizar Compra</button>      
                </form>           
          </div>
 
            }
        </>
    )  
}

export default Cart