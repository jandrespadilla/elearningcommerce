import './Cart.css'
import React,{useState}  from 'react'
import {  useCartContext } from '../../context/cartContext';
import {Form, Container,Row,Col} from 'react-bootstrap';
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
    const {cartList,emptyCard,removeItem,totalPrice} = useCartContext()
    const [id, setId] = useState('')
    const [name, setName] = useState({})
    const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    const textRegexp = new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/);
    
    const [dataForm, setDataForm] = useState({
        mail: '', name: '',lastname: '',  phone: '',address:''
      })
    const [errors, setErrors] = useState({})
     
    

            const makeShop= async (e)=>{
                e.preventDefault();
                setErrors(validateForm(dataForm)); 
                if (!Object.keys(errors).length===0) {
                    return;
                }
                let order = {}      
                 
                order.items = cartList.map (list => {
                        const id= list.id;
                        const name= list.name;
                        const amount= list.amount;
                        const price= list.price;
                        const total= parseInt(list.price)*parseInt(list.amount);
                        return {'id':id,'name':name,'price':price,'amount':amount,'total':total}
                    }
                )  
                order.totalGeneral= totalPrice(); 
                setName(dataForm);
                const db = getFirestore()
                const queryCollectionShoppers = collection(db, 'clientes')
                addDoc(queryCollectionShoppers, dataForm)
                .then(resp =>  {
                     
                    order.shopper = resp.id
                    const queryCollectionOrders = collection(db, 'ordenes')
                    addDoc(queryCollectionOrders, order)
                    .then(resOrder => {setId(resOrder.id);})
                    .catch(err => console.error(err))
                    .finally(() => {console.log('Finish ')})                
                
                })
                .catch(err => console.error(err))
                .finally(() => {console.log('Finish '); emptyCard() }) 
                
                const queryCollection = collection(db, 'productos')

                const queryUpdateStock = await query(
                   queryCollection,  
                   where( documentId() , 'in', cartList.map(it => it.id) )          
                )

                const batch = writeBatch(db)

                await getDocs(queryUpdateStock)
                  .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                       stock: res.data().stock - cartList.find(item => item.id === res.id).amount
                }) ))

                batch.commit()
         
            }

            const handleChange = (e) => {
                const {name,value} = e.target;
                setDataForm({
                  ...dataForm,
                  [name]: value
              })
            }
            const handleBlur = (e)=>{
                handleChange(e);
                setErrors(validateForm(dataForm));   
            }

            const validateForm = (form) => {
                let errorsValidator = {};
                if (!form.name.trim()) {
                    errorsValidator.name = '¡El campo Nombre es requerido!'
                }else if(!textRegexp.test(form.name.trim())) {
                    errorsValidator.name = '¡El campo Nombre debe ser solamente texto!'
                }
                if (!form.lastname.trim()) {
                    
                    errorsValidator.lastname = '¡El campo Nombre es requerido!'
                }else if(!textRegexp.test(form.lastname.trim())) {
                    errorsValidator.lastname = '¡El campo Nombre debe ser solamente texto!'
                }
                if (!form.address.trim()) {
                    
                    errorsValidator.address = '¡El campo Nombre es requerido!'
                }
                if (!form.phone.trim()) {
                    
                    errorsValidator.phone = '¡El campo Nombre es requerido!'
                }   
                if (!form.mail.trim()) {
                    
                    errorsValidator.mail = '¡El campo Mail es requerido!'
                }else if (!emailRegexp.test(form.mail)) {
                    
                    errorsValidator.mail = '¡El campo Mail No tiene formato de mail!'
                }                                                                          
                return errorsValidator;
            }
             


    return (
        <>

            {
            cartList.length===0 ?  
            
            <Container className="emptyCard bg-white text-dark">
             { id==='' ? <></> :  <Row className='bg-white emptyCard'><Col><p className='finishShop'>Muchas Gracias {name.name}. Su compra se realizo con exito, su orden tiene el numero {id} </p>  </Col></Row>}
                 
             <Row className='bg-white emptyCard'> <Col  ><Link to={"/"} >  <button className="btn btn-outline-primary btnGoOn"  >Seguir Comprando</button> </Link> </Col> </Row>
            </Container>
             
            :  
            <Container className="bg-white text-dark">
                <Row>
                    <Col>  
                        <Row   >
                        <Col> <h2>Detalle de su compra</h2>   </Col>
                        </Row>   
                            { cartList.map((course) =>
                              <Row  key={course.id}> <Col xs={6}  className='itemDescription'>Nombre: {course.name} <br/> Cantidad : {course.amount} <br/> Precio : {parseInt(course.price)*parseInt(course.amount)}</Col> <Col className='itemBotton'> <button   key={course.id}  onClick={() => removeItem(course)} className="btn btn-outline-primary"  >Eliminar</button></Col></Row> 
                            )}
                        <Row  >
                        <Col> <span className='total' key='total'> Total: {totalPrice()}</span>   </Col>
                        </Row> 
                        <Row  >
                        <Col>  <button className="btn btn-outline-primary" onClick={emptyCard} >Vaciar Carro</button>   </Col>
                        </Row> 
                            
                         
                       
                    </Col>
                        <Col>
                            <h2>Complete el formulario con sus datos</h2>
                            <Form   onSubmit={makeShop}  >
                        
                            <Form.Label className="labels  " htmlFor="name">Nombre</Form.Label>
                                <Form.Control
                                    type='text' 
                                    name='name' 
                                    id='name' 
                                    placeholder='Nombre' 
                                    value={dataForm.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    aria-describedby="namedHelpBlock"
                                    required
                                />
                                <Form.Text id="namedHelpBlock" muted>
                                {errors.name&&<p>{errors.name}</p>}
                                </Form.Text>
                                <Form.Label className="labels  " htmlFor="lastname">Apellido</Form.Label>
                                <Form.Control
                                    type='text' 
                                    name='lastname' 
                                    id='lastname' 
                                    placeholder='Apellido' 
                                    value={dataForm.lastname}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    aria-describedby="lastnamedHelpBlock"
                                    required
                                />
                                <Form.Text id="lastnamedHelpBlock" muted>
                                {errors.lastname&&<p>{errors.lastname}</p>}
                                </Form.Text>
                                <Form.Label className="labels  " htmlFor="address">Direccion</Form.Label>
                                <Form.Control
                                    type='text' 
                                    name='address' 
                                    id='address'
                                    placeholder='Direccion' 
                                    value={dataForm.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    aria-describedby="addressdHelpBlock"
                                    required
                                />
                                <Form.Text id="addressdHelpBlock" muted>
                                {errors.address&&<p>{errors.address}</p>}
                                </Form.Text>
                                <Form.Label className="labels  " htmlFor="phone">Telefono</Form.Label>
                                <Form.Control
                                    type='number' 
                                    name='phone'
                                    id='phone'
                                    placeholder='Phone' 
                                    value={dataForm.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    aria-describedby="phonedHelpBlock"
                                    required
                                />
                                <Form.Text id="phonedHelpBlock" muted>
                                {errors.phone&&<p>{errors.phone}</p>}
                                </Form.Text>
                                <Form.Label className="labels  " htmlFor="mail">Mail</Form.Label>
                                <Form.Control
                                    id="mail"
                                    name="mail"
                                    type='email' 
                                    placeholder='Mail' 
                                    value={dataForm.mail}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    aria-describedby="maildHelpBlock"
                                    required
                                />
                                <Form.Text id="maildHelpBlock" muted>
                                {errors.mail&&<p>{errors.mail}</p>}
                                </Form.Text>
                                <br/>
                                <button className="btn btn-outline-primary"  >Finalizar Compra</button>  
                            </Form>         
                     </Col>      
                  </Row>    
            </Container>
 
            }
        </>
    )  
}

export default Cart