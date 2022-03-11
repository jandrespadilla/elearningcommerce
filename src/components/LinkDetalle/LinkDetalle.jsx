import React from 'react';
import './LinkDetalle.css';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

 function LinkDetalle({curso,vacantes}) {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    setContador(vacantes)
  },[vacantes]);  
  return (
       
        <Link to={{  pathname:'/detalle/'+curso.id+'/'+contador }} >
            Ver Detalle
         </Link> 
     
  );
}
export default LinkDetalle 