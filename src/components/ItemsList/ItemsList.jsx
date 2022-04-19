import React, { useEffect , useState } from 'react'
import './ItemsList.css'
import Item from '../Item/Item'

function ItemsList({data}) {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        setCourses(data)
    }, [data])

    return ( 
        <>
                <div  className=" row  g-4 xs-1 md-4 widthDiv">
                { courses.map((course) =>
                        <Item course={course} key={course.id}/>
                )}
                </div>               
        </>
    )  
}

export default ItemsList