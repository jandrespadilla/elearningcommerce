import './ItemsDetailConteiner.css'
import React, { useEffect , useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
//import {  getCursos} from '../../helpers/getCursos'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
function ItemDetailConteiner({greeting}) {
    
    const [loading, setLoading] = useState(true)
    const [secciones, setSecciones] = useState([])
    const [cursos, setCursos] = useState([])
    const {cursoId,cantidad} = useParams()
    const getSecciones = new Promise((resolve,reject)=>{
        let url = 'https://jorgeandrespadilla.com.ar/mod/webservice/rest/server.php?wstoken=83453b9a2f882545cef25f1b361d2103&wsfunction=core_course_get_contents&courseid='+cursoId+'&moodlewsrestformat=json';
        setTimeout(() => {
        resolve(fetch(url)  
        .then((respuesta) => 
        respuesta.json())
        )   }, 3000);
    })
   
    useEffect(() => {
        getSecciones.then(
            (data) => {
              
                setSecciones(data)

            }  
        ).catch(
        ).finally(() => {
            setLoading(false)
            }
        )
              
        const db = getFirestore()
        const queryDb = doc(db, 'productos', cursoId)
        getDoc(queryDb)
        .then(resp => setCursos( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))
        .finally(() =>setLoading(false))

/*
        getCursos.then(
            (data) => {
                
                setCursos(data.courses.find(course => course.id === parseInt(cursoId) ))
           }  
        ).catch(
        ).finally(() => {
            setLoading(false)
            }
        )*/

}, [cursoId,cantidad]) 

 
    return ( 
        <>
            { 
            loading ? <h2>{greeting}</h2>
                :
                <ItemDetail secciones={secciones} cursos={cursos} vacantes={cantidad} />    
            
                
                    
            
        }
        </>
    )  
}
export default ItemDetailConteiner