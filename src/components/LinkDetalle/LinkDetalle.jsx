import React from 'react';
import './LinkDetalle.css';
import {  Link} from 'react-router-dom';
 
 function LinkDetalle({course}) {

  return (

    <Link  to={"/detail/"+course.id} >
        <button className="btn btn-outline-primary"  >Ver detalle</button>
    </Link>          
       
  );
}
export default LinkDetalle 