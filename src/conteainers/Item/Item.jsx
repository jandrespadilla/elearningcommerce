import React from 'react';
import './Item.css';
import { Card ,  Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';

 function Item({curso}) {
 
  const [vacantes, setVacantes] = useState(0);
  useEffect(() => {
    
    setVacantes(curso.stock)
  
  },[curso.stock]);

  return (
    <Col>
    <Card   style={{ width: '14rem' }}>
      <Card.Img variant="top" src={curso.img}/>
      <Card.Body>
        <Card.Title>{curso.name}</Card.Title>
        <Card.Text>
          {curso.description}
          </Card.Text>
          <Card.Text>
          Puestos disponibles  {vacantes}
        </Card.Text>
        <ItemCount curso={curso} />

        
      </Card.Body>
    </Card>
    </Col>
  
  );
}
export default Item