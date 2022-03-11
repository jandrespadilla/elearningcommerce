import { useEffect , useState } from 'react'

import './ItemDetail.css'
 
import {Row } from 'react-bootstrap';


function ItemDetail({data}) {
    const [cursos, setCursos] = useState([])
    
    useEffect(() => {
        
        setCursos(data)
        
    }, [data])


    return ( 

        <>
         
                <Row xs={1} md={4} className="g-4">
                { cursos.map((curso) =>
                    <p key={curso.id}>{curso.name}</p>
                       
                )}
                </Row>               
        
        </>
    
    )  
}

export default ItemDetail