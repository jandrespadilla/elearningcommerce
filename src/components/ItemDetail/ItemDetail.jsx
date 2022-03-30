import React ,{ useEffect , useState } from 'react'

import './ItemDetail.css'
import {Col,Card,Button} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
 

import { useCartContext } from '../../context/cartContext';

function ItemDetail({secciones,cursos,vacantes}) {
    const [seccionesH, setSeccionesH] = useState([])
  
    const [urlImg, setUrlImg] = useState(0);
  
 
  
    useEffect(() => {
        setUrlImg(cursos.imgenes)    
        setSeccionesH(secciones)
    }, [secciones,cursos])

  console.log(cursos);
    

    return ( 
        <>
         <Col>
            <Card style={{ width: '50%'}} >
            <Card.Img variant="top" style={{ width: '14rem'} } src={'/cursos/'+urlImg}/>
                <h1 className='textNombre' key={cursos.id}>{cursos.name}</h1>
                <h2 className='textNombre'>Temas</h2>
                { /*seccionesH.map((seccion) =>
                    <p className='textNombre' key={seccion.id}>{seccion.name}</p>
                )*/}
                  <ItemCount curso={cursos} vacantes={vacantes} />


             
             </Card>
        </Col>            
        </>
    )  
}

export default ItemDetail