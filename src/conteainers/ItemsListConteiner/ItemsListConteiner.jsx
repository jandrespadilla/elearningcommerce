
import './ItemsListConteiner.css'
import React, { useEffect , useState } from 'react'
import ItemsList from '../../components/ItemsList/ItemsList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

function ItemsListConteiner({categoriesId, greeting}) {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriesHome} = useParams()
     
       useEffect(() => {
         
           if (categoriesHome) {
                 
              
                const db = getFirestore()
                const queryColection = collection(db, 'productos')
                const queryFilter = query( queryColection, where('categorias', '==', categoriesHome)  )
                getDocs(queryFilter)
                .then(resp => setCourses( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false)) 
           
           } else {
            if (categoriesId) {
                const db = getFirestore()
                const queryColection = collection(db, 'productos')
                const queryFilter = query( queryColection, where('categorias', '==', categoriesId)  )
                getDocs(queryFilter)
                .then(resp => setCourses( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))          
            }else{
                    const db = getFirestore()
                    const queryColection = collection(db, 'productos')
                    getDocs(queryColection)
                    .then(resp => setCourses( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
                    .catch(err => console.log(err))
                    .finally(()=> setLoading(false)) 

           }
        }
       }, [categoriesHome,categoriesId]) 
    return ( 
        <>
            { 
            loading ? <h2>{greeting}</h2>
                :
            <ItemsList className="justify-content-center" data={courses} />
        }
        </>
    )  
}
export default ItemsListConteiner