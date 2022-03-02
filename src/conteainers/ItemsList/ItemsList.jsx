import { useEffect , useState } from 'react'
import { getFech } from '../../helpers/getFech'
import './ItemsList.css'
import ItemCount from '../ItemCount/ItemCount'
import {Row } from 'react-bootstrap';


function ItemsList({greeting}) {
    const [cursos, setCursos] = useState([])
    const [loading, setLoading] = useState(true)

   useEffect(() => {
    getFech.then(
        (data) => {
             
            setCursos(data)
       }  
    ).catch(
  
    ).finally(() => {
        setLoading(false)
        }
    )

   }, [])
   
 // console.log(cursos)

    return ( 

        <>
            { 
            loading ? <h2>{greeting}</h2>
                :
                <Row xs={1} md={4} className="g-4">
                { cursos.map((curso) =>
              
              
                    
                          <ItemCount curso={curso} key={curso.id}/>
                     
               
               
                )}
                </Row>               
        }
        </>
    
    )  
}

export default ItemsList