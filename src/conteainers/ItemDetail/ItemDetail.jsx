import { useEffect , useState } from 'react'

import './ItemDetail.css'
 
import {Row } from 'react-bootstrap';


function ItemDetail({data}) {
    const [cursos, setCursos] = useState([])
    
    useEffect(() => {
       
        setCursos(data)
    }, [])


    return ( 

        <>
         
                <Row xs={1} md={4} className="g-4">
                {   
                console.log(cursos)
               }
                </Row>               
        
        </>
    
    )  
}

export default ItemDetail