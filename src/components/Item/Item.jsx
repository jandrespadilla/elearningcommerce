import React , { useState, useEffect } from 'react';
import './Item.css';
import { Card ,  Col} from 'react-bootstrap';
import  LinkDetalle  from '../LinkDetalle/LinkDetalle'

function Item({course}) {
  
  const [urlImg, setUrlImg] = useState(0);
  
  useEffect(() => {
      setUrlImg(course.imgenes) 
  },[course]);

  return (
    <Col className=' col-xl-3' >
    <Card  className='cardSize' >
      <Card.Img className='imgSize' variant="top" src={'/cursos/'+urlImg}/>
      <Card.Body >
          <Card.Title className='textName'>{course.name}</Card.Title>
          <Card.Text className='textDescription'>
              {course.descripcion}
          </Card.Text>
          <Card.Text className='textPrice'>
             Precio {course.price}
          </Card.Text>                    
          <Card.Text className='textName'>
              Puestos disponibles {course.stock}
          </Card.Text>
         
      </Card.Body>
      <LinkDetalle  course={course}    />
    </Card>
    </Col>
  
  );
}
export default Item