import  React, { useState, createContext,  useContext ,useEffect } from "react";


//creando el contexto
   const CartContext = createContext([]);
   export const useCartContext = () => useContext(CartContext)
 
function CartContextProvider({children}) {
    const [cartList, setCartList]  = useState([])
    const [counter, setCounter] = useState(0);
    const [vacancies, setVacancies] = useState(0);
    const [amount, setAmount] = useState(0);
    useEffect(() => {
      setVacancies(10)
      setCounter(counter)
       
    },[counter,vacancies]);

    const accumulatorCart = () => {
        return (
          cartList.reduce((accumulator, valor) => accumulator + valor.amount, 0)  
        )
    }

    const addCart = (item) => {
       
       if(parseInt(counter)>0){
        
            if (isInCart(item.id)){
              addNewAmount(item.id)
              accumulatorCart()
              updateAmount()
            }else{
              
                setCartList([...cartList,{...item,amount:counter}])
                setAmount(amount+counter)    
            }
            return true;
          }
        else{
          return false;
        }
    }

    const addHandler = () => {
        if((parseInt(vacancies) - counter) === 0){
          console.log('No hay mas vacantes')
          return;  
        }   
        setCounter(counter + 1)
        setVacancies(parseInt(vacancies)-parseInt(counter))
      };

      const subtractHandler  = () => {
        if(counter === 0){
          return;  
        }
        setCounter(counter - 1)
        setVacancies(parseInt(vacancies)-parseInt(counter))
      };

      const emptyCard=()=>{
        setCartList( [])
        setAmount(0);
       }

      const totalPrice = () => {
        return cartList.reduce((acum, prod) => acum + (prod.amount * prod.price) , 0)
      }

      function isInCart(id){
      let esta= false
      cartList.forEach (list =>{
          if (list.id===id) {
            esta= true;
            }
          }) 
          return esta
      }

     const addNewAmount = (id) => {
      cartList.map (list => 
        list.id===id
        ? list.amount=counter 
        : list
      
      )
     }

     const updateAmount = () => {
          for (let list of cartList) {
            setAmount(parseInt(amount)+parseInt(list.amount))
          }
      }

     
     const removeItem = (curso) => {
          cartList.splice(cartList.findIndex(e => e.id === curso.id),1);
          if (cartList.length===0) {
            emptyCard()
          }else{
            updateAmount()
            
          }
          accumulatorCart()
     }

    return (
        <CartContext.Provider value = {{cartList,addCart,subtractHandler,addHandler,emptyCard,removeItem,accumulatorCart,totalPrice,amount,vacancies,counter}} >
            {children}
        </CartContext.Provider>
    )
    
}
export default  CartContextProvider