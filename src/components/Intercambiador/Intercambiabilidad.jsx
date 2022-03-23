import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/cartContext';

const InputCount= ()=> {

    return (
        <Link to='/cart' >
              
      
            <button className="btn btn-outline-primary"  >Terminar mi Compra</button>
        </Link>
    )
}



const ButtonCount= ({handleInter})=> {
  
    return <button className="btn btn-outline-primary" onClick={handleInter}>Agregar Al carrito</button>

}

const Intercambiabilidad = ({curso}) => {
   
    const [inputType, setInputType ] = useState('button')
    const {agregarCart} = useCartContext()
    const handleInter=()=>{
        
        agregarCart(curso)
        setInputType('input')
        
        
    }
    
    return (
        <div>
            {
                inputType === 'button' ? 
                    <ButtonCount  handleInter={handleInter} />
                : 
                    <InputCount />
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiabilidad
