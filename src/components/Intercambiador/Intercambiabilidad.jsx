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

const Intercambiabilidad = ({course}) => {
    const [inputType, setInputType ] = useState('button')
    const {addCart} = useCartContext()
    const handleInter=()=>{
       if (addCart(course)){
          setInputType('input')
        }
    }
    
    return (
        <div>
            {
                inputType === 'button' ? 
                    <ButtonCount  handleInter={handleInter} />
                : 
                    <InputCount />
            }
        </div>
    )
}

export default Intercambiabilidad
