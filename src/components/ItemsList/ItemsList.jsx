import React, { useEffect , useState } from 'react'
import './ItemsList.css'
import Item from '../Item/Item'
 

function ItemsList({data}) {
    const [cursos, setCursos] = useState([])
    useEffect(() => {
        setCursos(data)
    }, [data])
    console.log(data);
    return ( 
        <>
                <div  className="row g-4 xs-1 md-4 ">
                { cursos.map((curso) =>
                        <Item curso={curso} key={curso.id}/>
                )}
                </div>               
        
        </>
    
    )  
}

export default ItemsList