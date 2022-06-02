/////

$( window ).load(displayTodos);

/////

function displayTodos() {

    const todosJSON=getTodos();

    var string="";

    todosJSON.forEach(element=>{

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

    const todosJSON = localStorage.getItem("todos");

    if (todosJSON !== null) 

        return JSON.parse(todosJSON);
        
     else 

        return [];
    
}