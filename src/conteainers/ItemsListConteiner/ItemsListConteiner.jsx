import { useEffect , useState } from 'react'
import { getFech } from '../../helpers/getFech'
import './ItemsListConteiner.css'




function ItemsListConteiner({greeting}) {
    const [cursos, setCursos] = useState([])
    const [loading, setLoading] = useState(true)

   useEffect(() => {
    getFech.then(
        (data) => {
             
            setCursos(data)
       }  
    ).catch(
     //   (error)=>  console.log(error)
    ).finally(() => {
        setLoading(false)
        }
    )

   }, [])
   
  console.log(cursos)

    return ( 

        <>
            { 
            loading ? <h2>{greeting}</h2>
                :
            cursos.map((curso) => <li key={curso.id}>{curso.name}</li>)
        
        }
        </>
    
    )  
}

export default ItemsListConteiner