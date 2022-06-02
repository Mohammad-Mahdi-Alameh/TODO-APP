/////

$( window ).load(displayTodos);

/////

var todos = getTodos();

var id = 1 ;

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

    const date=getDate();

    todos.push({

        "id" :,

        "Title":,

        "Description":,

        "Point":,

        "IsDone":,

        "CreatedAt":,

    });

    saveTodo();

    id++;

    
}

function saveTodo() {

    localStorage.setItem("todos",JSON.stringify(todos));

}

function getDate() {

    var today = new Date();

    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getMinutes()+'-'+today.getSeconds();
    
    return date;
}

$('#add').click(popupForm);

function popupForm() {

    $('#todos').css("display", "none");

    $('#my-form').css("display", "block");


    
}

$('#btn-add').click(addTodo);

$('#btn-cancel').click(popupForm);