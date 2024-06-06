// simple illustration of iife's
// functions called immediately they 
// are defined

(function(message){
    const superhero = "Batman";
    console.log(message , superhero)

})("Hello");

(function(message){
    const superhero = "Superman";
    console.log(message ,superhero)

})("Sup");


