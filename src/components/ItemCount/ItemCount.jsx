
import './ItemCount.css';
import {  Button } from 'react-bootstrap';
import React from 'react';
import { useCartContext } from '../../context/cartContext';
import  Intercambiabilidad  from '../Intercambiador/Intercambiabilidad';

function ItemCount({curso} ) {
  const {restarHandler} = useCartContext()
  const {sumarHandler} = useCartContext()
  const {contador} = useCartContext()
   
  return (
      <>
        <Button variant="primary"    onClick={() => sumarHandler(contador)}>+</Button>
         <span className='textNumero'>&nbsp;{contador}&nbsp;</span>  
         <Button variant="primary"   onClick={() => restarHandler(contador)}>-</Button> <br/><br/>
        <Intercambiabilidad curso={curso} /><br/>
      </>
  );
}
export default ItemCount