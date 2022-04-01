import React , { useState, useEffect } from 'react';
import './Item.css';
import { Card ,  Col} from 'react-bootstrap';
import  LinkDetalle  from '../LinkDetalle/LinkDetalle'

function Item({curso}) {
  
  const [urlImg, setUrlImg] = useState(0);
  
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
              {curso.descripcion}
          </Card.Text>
          <Card.Text className='textPrecio'>
             Precio {curso.price}
          </Card.Text>                    
          <Card.Text className='textNombre'>
              Puestos disponibles {curso.stock}
          </Card.Text>
          <LinkDetalle curso={curso}    />
      </Card.Body>
    </Card>
    </Col>
  
  );
}
export default Item