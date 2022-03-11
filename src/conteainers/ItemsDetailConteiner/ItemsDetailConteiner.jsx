import './ItemsDetailConteiner.css'
import { useEffect , useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


function ItemDetailConteiner({greeting}) {
    
    const [loading, setLoading] = useState(true)
    const [curso, setCurso] = useState([])
    const {cursoId,cantidad} = useParams()
    const getSecciones2 = new Promise((resolve,reject)=>{
        let url = 'https://jorgeandrespadilla.com.ar/mod/webservice/rest/server.php?wstoken=83453b9a2f882545cef25f1b361d2103&wsfunction=core_course_get_contents&courseid='+cursoId+'&moodlewsrestformat=json';
        setTimeout(() => {
        resolve(fetch(url)  
        .then((respuesta) => 
        respuesta.json())
        )   }, 3000);
    })
   
    useEffect(() => {
        getSecciones2.then(
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