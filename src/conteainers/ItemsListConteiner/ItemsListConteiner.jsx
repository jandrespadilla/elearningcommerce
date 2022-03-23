
import './ItemsListConteiner.css'
import React, { useEffect , useState } from 'react'
import ItemsList from '../../components/ItemsList/ItemsList'
import {  getCursos} from '../../helpers/getCursos'
import { useParams } from 'react-router-dom'

function ItemsListConteiner({categoriaHome , greeting}) {
    const [cursos, setCursos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    const categ = categoriaHome
       useEffect(() => {
           if (categoriaId) {
            
            getCursos.then(
                (data) => {    
                   
                    setCursos(data.courses.filter(course => course.categoryid === parseInt(categoriaId)))
               }  
            ).catch(
            ).finally(() => {
                setLoading(false)
                }
            )
           } else {
            getCursos.then(
                (data) => {
                    
                    setCursos(data.courses.filter(course => course.categoryid === parseInt(categ) ))
               }  
            ).catch(
            ).finally(() => {
                setLoading(false)
                }
            )
           }

       }, [categoriaId,categ]) 
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