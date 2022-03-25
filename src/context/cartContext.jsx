import  React, { useState, createContext,  useContext ,useEffect } from "react";


//creando el contexto
   const CartContext = createContext([]);
   export const useCartContext = () => useContext(CartContext)
 
function CartContextProvider({children}) {
    const [cartList,setCartList]  = useState([])
    const [contador, setContador] = useState(0);
    const [vacantes, setVacantes] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    useEffect(() => {
      setVacantes(10)
      setContador(contador)
       
    },[contador,vacantes]);



    const agregarCart = (item) => {
      if (isInCart(item.id)){
          actualizarCantidad(item.id)
      }else{
          setCartList([...cartList,{...item,cantidad:contador}])
          setCantidad(cantidad+contador)    
      }
   
    }

    const sumarHandler = () => {
 
        if((parseInt(vacantes) - contador) === 0){
          console.log('No hay mas vacantes')
          return;  
        }   
        
        setContador(contador + 1)
        setVacantes(parseInt(vacantes)-parseInt(contador))
      };

      const restarHandler  = () => {
        if(contador === 0){
          return;  
        }
        setContador(contador - 1)
        setVacantes(parseInt(vacantes)-parseInt(contador))
      };

      const vaciarCarito=()=>{
        setCartList( [])
        setCantidad(0);
       }

    const isInCart = (id) => {
       let esta = false  
      cartList.map (list =>{
        if (list.id===id) {
              esta = true;
          }
        })
        return esta
     }


     const actualizarCantidad = () => {
           
          console.log('cantidad '+ cantidad);
          for (let list of cartList) {
            setCantidad(parseInt(cantidad)+parseInt(list.cantidad))
          }

      }

     
     const removeItem = (curso) => {
        
          cartList.splice(cartList.findIndex(e => e.id === curso.id),1);
          if (cartList.length===0) {
            vaciarCarito()
          }else{
            actualizarCantidad()
          }
     }

    return (
        <CartContext.Provider value = {{cartList,agregarCart,restarHandler,sumarHandler,vaciarCarito,removeItem,cantidad,vacantes,contador}} >
            {children}
        </CartContext.Provider>
        

    )
    
}
export default  CartContextProvider