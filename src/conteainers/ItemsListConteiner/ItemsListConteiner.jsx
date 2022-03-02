import { useEffect , useState } from 'react'
import { getFech } from '../../helpers/getFech'
import './ItemsListConteiner.css'
import ItemCount from '../ItemCount/ItemCount'



function ItemsListConteiner({greeting}) {
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
            cursos.map((curso) => <li key={curso.id}>{curso.name}   <ItemCount stock={curso.stock} /></li>)
        
        }
        </>
    
    )  
}

export default ItemsListConteiner