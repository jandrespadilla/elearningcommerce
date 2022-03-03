
import './ItemsListConteiner.css'
import { useEffect , useState } from 'react'
import ItemsList from '../ItemsList/ItemsList'
import { getFech } from '../../helpers/getFech'



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