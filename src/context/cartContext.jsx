import  React, { useState, createContext,  useContext ,useEffect } from "react";


//creando el contexto
   const CartContext = createContext([]);
   export const useCartContext = () => useContext(CartContext)
 
function CartContextProvider({children}) {
    const [cartList,setCartList]  = useState([])
    const [contador, setContador] = useState(0);
    const [vacantes, setVacantes] = useState(0);
    useEffect(() => {
      setVacantes(10)
      setContador(contador)
    },[contador,vacantes]);


    const agregarCart = (item) => {
     
      if (isInCart(item.id)){
        
          actualizarCantidad(item.id)
      }else{
        
         setCartList([...cartList,{...item,cantidad:contador}])
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
     
     const actualizarCantidad = (id) => {
     
      cartList.map (list => 
        list.id===id
        ? list.cantidad=contador 
        : list
      
      )
     }

     const removeItem = (curso) => {
      console.log(curso.id);
      cartList.map (list => 
        list.id=curso.id
      )
     }

    return (
        <CartContext.Provider value = {{cartList,agregarCart,restarHandler,sumarHandler,vaciarCarito,removeItem,vacantes,contador}} >
            {children}
        </CartContext.Provider>
        

    )
    
}
export default  CartContextProvider