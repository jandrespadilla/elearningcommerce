import React from 'react';
import './ItemCount.css';
 
import { useState, useEffect } from 'react';


 function ItemCount({stock}) {
  const [contador, setContador] = useState(0);
  const [vacantes, setVacantes] = useState(0);
  useEffect(() => {
    
    setVacantes(stock - contador)
  
  });
  const sumarHandler = () => {
    setContador(contador + 1)
  };
  const restarHandler = () => {
    if(contador === 0){
      return;  
    }
    setContador(contador - 1)
  };
 
  const onAdd = () => {
    if(contador === 0){
        return;  
      }
    console.log(contador)
  };

  return (
    <div>
        
      <p>
           Vacantes {vacantes} <button onClick={() => sumarHandler()}>+</button> {contador}  <button onClick={() => restarHandler()}>-</button> <button onClick={() => onAdd() }>Agrear al carrito</button>
           
      </p>
     
    </div>
  );
}
export default ItemCount