import React from 'react';
import './LinkDetalle.css';
import { useState , useEffect } from 'react';
//import { Link } from 'react-router-dom';
import {  Button } from 'react-bootstrap';
import { useNavigate , Link} from 'react-router-dom';
 
 function LinkDetalle({curso,vacantes}) {
  const navigate = useNavigate();
  const [contador, setContador] = useState(0);
  useEffect(() => {
    setContador(vacantes)
  },[vacantes]);  
  console.log(curso);
  return (

    <Link to={"/detalle/"+curso.id} >
              
      
    <button className="btn btn-outline-primary"  >Ver detalle</button>
</Link>          
       
  );
}
export default LinkDetalle 