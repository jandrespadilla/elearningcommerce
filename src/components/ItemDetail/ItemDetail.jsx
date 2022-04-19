import React ,{ useEffect , useState } from 'react'
import './ItemDetail.css'
import {Card} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

function ItemDetail({courses,vacancies}) {
    const [urlImg, setUrlImg] = useState(0);
    const [loading, setLoading] = useState(true)
    const [secciones, setSecciones] = useState([]);
    
    useEffect(() => {
        setUrlImg(courses.imgenes)    
          
        const db = getFirestore()
        const queryColection = collection(db, 'secciones')
        const queryFilter = query( queryColection, where('idCurso', '==', courses.id)  )
        getDocs(queryFilter)
        .then(resp => setSecciones( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 

    }, [courses])

    return ( 
        <>
         
            <Card className='styleCard d-block' >
            <Card.Img variant="top" style={{ width: '14rem'} } src={'/cursos/'+urlImg}/>
                <h1  key={courses.id}>{courses.name}</h1>
                <h2 >Descripcion</h2>
                <p>{courses.descripcion}</p>
                <h2 >Precio</h2>
                <p>{courses.price}</p>                
                <h2 >Temas</h2>
                { 
                loading ? <h2>Cargando</h2>
                :
                secciones.map((seccion) =>
                    <>
                        <h4  key={seccion.id} >{seccion.name} </h4>
                        <p className='textNombre'>{seccion.detalle}</p>
                    </>
                )}
                  <ItemCount course={courses} vacancies={vacancies} />
             </Card>
                    
        </>
    )  
}

export default ItemDetail