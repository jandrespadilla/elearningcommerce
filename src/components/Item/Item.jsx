import React from 'react';
import './Item.css';
import { useCartContext } from '../../context/cartContext';
import { Card ,  Col, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import  LinkDetalle  from '../LinkDetalle/LinkDetalle'

function Item({curso}) {
  
  const [urlImg, setUrlImg] = useState(0);
  const {vacantes} = useCartContext()
  useEffect(() => {
  
     
    setUrlImg(curso.imgenes) 
   
  
  },[curso]);

  return (
    <Col>
    <Card   style={{ width: '14rem' }}>
      <Card.Img variant="top" src={'/cursos/'+urlImg}/>
      <Card.Body>
        <Card.Title className='textNombre'>{curso.name}</Card.Title>
        <Card.Text className='textNombre'>
          {curso.description}
          </Card.Text>
          <Card.Text className='textNombre'>
          Puestos disponibles {vacantes}
        </Card.Text>
         
        
        <LinkDetalle curso={curso}    />

        
        
      </Card.Body>
    </Card>
    </Col>
  
  );
}
export default Item