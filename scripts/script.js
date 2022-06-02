/////

$( window ).load(displayTodos);

/////

function displayTodos() {

    getTodos();


    
}

function getTodos() {

    const todosJSON = localStorage.getItem("todos");

    if (todosJSON !== null) 

        return JSON.parse(todosJSON);
        
     else 
     
        return [];
    
}