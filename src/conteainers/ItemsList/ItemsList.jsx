import { useEffect , useState } from 'react'

import './ItemsList.css'
import Item from '../Item/Item'
import {Row } from 'react-bootstrap';


function ItemsList({data}) {
    const [cursos, setCursos] = useState([])
    
    useEffect(() => {
       
        setCursos(data)
    }, [data])


    return ( 

        <>
         
                <Row xs={1} md={4} className="g-4">
                { cursos.map((curso) =>
                        <Item curso={curso} key={curso.id}/>
                )}
                </Row>               
        
        </>
    
    )  
}

export default ItemsList