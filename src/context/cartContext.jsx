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
    //  console.log(item);
        setCartList([...cartList,{...item,cantidad:contador}])

    }

    const sumarHandler = () => {
      console.log(vacantes);
      console.log(contador);
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

    return (
        <CartContext.Provider value = {{cartList,agregarCart,restarHandler,sumarHandler,vaciarCarito,vacantes,contador}} >
            {children}
        </CartContext.Provider>
        

    )
    
}
export default  CartContextProvider