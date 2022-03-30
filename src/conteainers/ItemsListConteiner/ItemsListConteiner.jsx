
import './ItemsListConteiner.css'
import React, { useEffect , useState } from 'react'
import ItemsList from '../../components/ItemsList/ItemsList'
import {  getCursos} from '../../helpers/getCursos'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

function ItemsListConteiner({categoriaHome , greeting}) {
    const [cursos, setCursos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    const categ = categoriaHome
       useEffect(() => {
           if (categoriaId) {
                 
           
                const db = getFirestore()
                const queryColection = collection(db, 'productos')
                const queryFilter = query( queryColection, where('categorias', '==', categoriaId)  )
                getDocs(queryFilter)
                .then(resp => setCursos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false)) 
           
           } else {

            const db = getFirestore()
            const queryColection = collection(db, 'productos')
            getDocs(queryColection)
            .then(resp => setCursos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 

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