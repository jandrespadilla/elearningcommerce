import './ItemsDetailConteiner.css'
import React, { useEffect , useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
function ItemDetailConteiner({greeting}) {
    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState([])
    const {courseId,cantidad} = useParams()
   
    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'productos', courseId)
        getDoc(queryDb)
        .then(resp => setCourses( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))
        .finally(() =>setLoading(false))

}, [courseId,cantidad]) 

 
    return ( 
        <>
            { 
                 loading ? <h2>{greeting}</h2>
                :
                <ItemDetail className='styleItem' courses={courses} vacantes={cantidad} />    
             }
        </>
    )  
}
export default ItemDetailConteiner