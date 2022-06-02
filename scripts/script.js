/////

$( window ).load(displayTodos);

/////

var todos = getTodos();

function displayTodos() {

    var string="";

    todos.forEach(element=>{

                string +=''+

                            '<div class="center">' +
                                
                                '<ul>' +
                                
                                    '<li></li>' +
                                
                                '</ul>' +
                                
                                '<div class="button-container">' +
                                    
                                    '<div id="delete">    </div>' +    
                                        
                                    '<div id="done">    </div>' +
                                        
                                '</div>' +
                                
                            '</div>' 
                            
                        });

    document.getElementById("todos").innerHTML=string


}

function getTodos() {

    const todosString = localStorage.getItem("todos");

    if (todosJSON !== null) 

        return JSON.parse(todosString);
        
     else 

        return [];
    
}

function addTodo() {

    const id=uuidv4();

    todos.push({

        "id" : id,

        "Title":

        "Description":

        "Point":

        "IsDone":

        "CreatedAt":

    })
    
    
}