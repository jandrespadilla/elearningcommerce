
import './ItemsDetailConteiner.css'
import { useEffect , useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {  getCursos} from '../../helpers/getCursos'



function ItemDetailConteiner({greeting}) {
    const [cursos, setCursos] = useState([])
    const [loading, setLoading] = useState(true)
       useEffect(() => {
        getCursos.then(
            (data) => {
                 
                setCursos(data.courses)
           }  
        ).catch(
      
        ).finally(() => {
            setLoading(false)
            }
        )
    
       }, []) 
         
    return ( 

        <>
            { 
            loading ? <h2>{greeting}</h2>
                :
            <ItemDetail data={cursos} />
            
           
          

        }
        </>
    
    )  
}
export default ItemDetailConteiner