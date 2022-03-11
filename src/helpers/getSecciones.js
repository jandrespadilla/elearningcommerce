export const getSecciones = new Promise((resolve,reject)=>{

     
    let url = 'https://jorgeandrespadilla.com.ar/mod/webservice/rest/server.php?wstoken=83453b9a2f882545cef25f1b361d2103&wsfunction=core_course_get_contents&courseid=3&moodlewsrestformat=json';

   setTimeout(() => {
    resolve(fetch(url)  
    .then((respuesta) => 
    
    respuesta.json())
    )   }, 3000);
   
   

  
  })