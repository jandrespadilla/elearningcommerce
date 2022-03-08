import React from 'react';
import './ItemCount.css';
import {  Button } from 'react-bootstrap';
import { useState } from 'react';


 function ItemCount({curso}) {
  const [contador, setContador] = useState(0);
   
 

  const sumarHandler = () => {
    if((curso.stock - contador) === 0){
      console.log('No hay mas vacantes')
      return;  
    }      
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
      <>
        <Button variant="primary"    onClick={() => sumarHandler()}>+</Button> <span className='textNumero'>&nbsp;{contador}&nbsp;</span>  <Button variant="primary"   onClick={() => restarHandler()}>-</Button> <br/><br/>

        <Button variant="primary"   onClick={() => onAdd() }>Agrear al carrito</Button>
        
      </>
  
  );
}
export default ItemCount