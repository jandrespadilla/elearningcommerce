export let listaCursos = [
    {  
    id: '1', 
    name: 'JavaScript 101', 
    description: 'Curso de javascript basico', 
    stock: 10 
    },
    {  
    id: '2', 
    name: 'JavaScript avanzado', 
    description: 'Curso de javascript avanzado', 
    stock: 10 
    },
    {  
     id: '3', 
    name: 'React JS 101', 
    description: 'Curso de React JS basico', 
    stock: 10 
    },
    {  
     id: '4', 
    name: 'React JS Avanzado', 
    description: 'Curso de React JS avanzado', 
    stock: 10 
    },
    {  
     id: '5', 
    name: 'PHP 101', 
    description: 'Curso de PHP basico', 
    stock: 10 
    },
    {  
     id: '6', 
    name: 'PHP Avanzado', 
    description: 'Curso de PHP avanzado', 
    stock: 10 
    }                        
]




export const getFech = new Promise((resolve,reject)=>{

  
 
     setTimeout(() => {
         resolve(listaCursos)    
     }, 3000);
    
 
})

