
import './ItemsListConteiner.css'
import { useEffect , useState } from 'react'
import ItemsList from '../ItemsList/ItemsList'
import {  getCursos} from '../../helpers/getCursos'



function ItemsListConteiner({greeting}) {
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
            <ItemsList data={cursos} />
            
           
          

        }
        </>
    
    )  
}
export default ItemsListConteiner