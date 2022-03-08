export let listaCursos = [
    {  
    id: '1', 
    name: 'JavaScript 101', 
    description: 'Curso de javascript basico', 
    img: './cursos/js.png', 
    stock: 10 
    },
    {  
    id: '2', 
    name: 'JavaScript avanzado', 
    description: 'Curso de javascript avanzado', 
    img: './cursos/js.png', 
    stock: 10 
    },
    {  
     id: '3', 
    name: 'React JS 101', 
    description: 'Curso de React JS basico', 
    img: './cursos/react.png', 
    stock: 10 
    },
    {  
     id: '4', 
    name: 'React JS Avanzado', 
    description: 'Curso de React JS avanzado', 
    img: './cursos/react.png', 
    stock: 10 
    },
    {  
     id: '5', 
    name: 'PHP 101', 
    description: 'Curso de PHP basico', 
    img: './cursos/php.png', 
    stock: 10 
    },
    {  
     id: '6', 
    name: 'PHP Avanzado', 
    description: 'Curso de PHP avanzado', 
    img: './cursos/php.png', 
    stock: 10 
    },
    {  
     id: '7', 
    name: 'Python 101', 
    description: 'Curso de Python basico', 
    img: './cursos/python.png', 
    stock: 10 
    },
    {  
     id: '8', 
    name: 'Python Avanzado', 
    description: 'Curso de Python avanzado', 
    img: './cursos/python.png', 
    stock: 10 
    },
    {  
     id: '9', 
    name: 'Node 101', 
    description: 'Curso de Node basico', 
    img: './cursos/node.png', 
    stock: 10 
    },
    {  
     id: '10', 
    name: 'Node Avanzado', 
    description: 'Curso de Node avanzado', 
    img: './cursos/node.png', 
    stock: 10 
    }   

]




export const getFech = new Promise((resolve,reject)=>{

  
 
     setTimeout(() => {
         resolve(listaCursos)    
     }, 3000);
    
 
})


export const getCursos = new Promise((resolve,reject)=>{

  let url =
  'https://jorgeandrespadilla.com.ar/mod/webservice/rest/server.php?wstoken=83453b9a2f882545cef25f1b361d2103&wsfunction=core_course_get_courses_by_field&field=category&value=3&moodlewsrestformat=json';
  setTimeout(() => {
  resolve(fetch(url)  
  .then((respuesta) => respuesta.json())
  )   }, 3000);
 
 
   
 

})
 