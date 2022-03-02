import React from 'react';
import './ItemCount.css';
import { Card , Button , Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';


 function ItemCount({curso}) {
  const [contador, setContador] = useState(0);
  const [vacantes, setVacantes] = useState(0);
  useEffect(() => {
    
    setVacantes(curso.stock - contador)
  
  },[curso.stock, contador]);

  const sumarHandler = () => {
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
        <Button variant="primary"    onClick={() => sumarHandler()}>+</Button> &nbsp;{contador}&nbsp;  <Button variant="primary"   onClick={() => restarHandler()}>-</Button> <br/><br/>

        <Button variant="primary"   onClick={() => onAdd() }>Agrear al carrito</Button>
        
      </Card.Body>
    </Card>
    </Col>
  
  );
}
export default ItemCount