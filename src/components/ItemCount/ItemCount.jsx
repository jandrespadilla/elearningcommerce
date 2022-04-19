
import './ItemCount.css';
import {  Button } from 'react-bootstrap';
import React from 'react';
import { useCartContext } from '../../context/cartContext';
import  Intercambiabilidad  from '../Intercambiador/Intercambiabilidad';

function ItemCount({course} ) {
  const {subtractHandler,addHandler,counter} = useCartContext()
 
   
  return (
      <>
        <Button variant="primary"    onClick={() => addHandler(counter)}>+</Button>
         <span className='textNumber'>&nbsp;{counter}&nbsp;</span>  
         <Button variant="primary"   onClick={() => subtractHandler(counter)}>-</Button> <br/><br/>
        <Intercambiabilidad course={course} /><br/>
      </>
  );
}
export default ItemCount