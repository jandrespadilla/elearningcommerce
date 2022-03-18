import  { useState, createContext, Children, useContext } from "react";

 
//creando el contexto
   const CartContext = createContext([]);
   export const useCartContext = () => useContext(CartContext)
 
function CartContextProvider({children}) {
    const [cartList,setCartList]  = useState([])

    const agregarCart = (item) => {
        setCartList([...cartList,item])

    }

    return (
        <CartContext.Provider value = {{cartList,agregarCart}} >

            {children}
        </CartContext.Provider>
        

    )
    
}
export default  CartContextProvider