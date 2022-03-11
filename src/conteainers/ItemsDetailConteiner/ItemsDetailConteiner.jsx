import './ItemsDetailConteiner.css'
import { useEffect , useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {  getSecciones} from '../../helpers/getSecciones'
import { useParams } from 'react-router-dom'


function ItemDetailConteiner({greeting}) {
    
    const [loading, setLoading] = useState(true)
    const [curso, setCurso] = useState()
    const {cursoId,cantidad} = useParams()

   
    useEffect(() => {
        getSecciones.then(
            (data) => {
                setCurso(data)
            }  
        ).catch(
        ).finally(() => {
            setLoading(false)
            }
        )
}, [cursoId,cantidad]) 

 
    return ( 
        <>
            { 
            loading ? <h2>{greeting}</h2>
                :
                <ItemDetail data={curso} />    
            
                
                    
            
        }
        </>
    )  
}
export default ItemDetailConteiner