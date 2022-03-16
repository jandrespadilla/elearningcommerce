import React from 'react';
import './Item.css';
import { Card ,  Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import  LinkDetalle  from '../LinkDetalle/LinkDetalle'

function Item({curso}) {
  const [vacantes, setVacantes] = useState(0);
  const [urlImg, setUrlImg] = useState(0);
  useEffect(() => {
  
    if (curso.overviewfiles.length>0) {
      let fileUrl = curso.overviewfiles[0].filename ;
      setUrlImg(fileUrl)     
    }

    setVacantes(10)
  
  },[curso]);

  return (
    <Col>
    <Card   style={{ width: '14rem' }}>
      <Card.Img variant="top" src={'/cursos/'+urlImg}/>
      <Card.Body>
        <Card.Title className='textNombre'>{curso.fullname}</Card.Title>
        <Card.Text className='textNombre'>
          {curso.description}
          </Card.Text>
          <Card.Text className='textNombre'>
          Puestos disponibles  {vacantes}
        </Card.Text>
        <ItemCount curso={curso} vacantes={vacantes} />
        <LinkDetalle curso={curso} vacantes={vacantes} />
                                           
       
        
      </Card.Body>
    </Card>
    </Col>
  
  );
}
export default Item