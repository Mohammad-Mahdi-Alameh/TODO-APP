

// $( window ).load(function() {
//    checkTodos();
//   });



var todos = getTodos();

checkTodos();
function checkTodos() {
// console.log(!(jQuery.isEmptyObject(todos)));
    if(!(jQuery.isEmptyObject(todos))){

      displayTodos();

    }
    
}
// displayTodos();

function displayTodos() {
    
    var string="", reversed=[];

    $.each(todos, function(i, item){

                string +=                         
                                '<div id="todos"><ul>' +
                                
                                    '<li>Title: '+ todos[i].Title +'</li>' +

                                    '<li>Point: '+ todos[i].Point +'</li>' +
                                    
                                    '<li>Description: '+ todos[i].Description +'</li>' +

                                    '<li>Date Created: '+ todos[i].CreatedAt +'</li>' +
                                                       
                                '</ul>' +
                                
                                '<div class="button-container">' +
                                    
                                    '<button id = '+ todos[i].id +' class="delete">Delete</button>' +    
                                        
                                    '<button id = '+ todos[i].id +' class="done">Done</button>' +
                                        
                                '</div></div>' ;


                
                //we created this reversed array to display them indescending order of date created

                // reversed.unshift(string);
                // console.log(reversed[i]);
                           
                            
                            
                        });

    $('#todo-container').html(string);

}

function getTodos() {

    const todosString = localStorage.getItem("todos");

    if (todosString !== null) 

        return JSON.parse(todosString);
        
     else 

        return [];


}
function getId() {

    let id = localStorage.getItem("id");

    if (id === null){

        localStorage.setItem("id",1);

        return localStorage.getItem("id");
    }

     else{ 

        id++;

        localStorage.setItem("id",id);

        return localStorage.getItem("id");}

}
// var todos=[];
function addTodo() {

    const date=getDate();

    // var todo_id=getId();
    

    todos.push({

        "id" :getId(),

        "Title":$('#title').val(),

        "Description":$('#description').val(),

        "Point":$('#point').val(),

        "IsDone":0,

        "CreatedAt":date,

    });

    saveTodo();
    
}

function saveTodo() {

    localStorage.setItem("todos",JSON.stringify(todos));

}


function getDate() {

    var today = new Date();

    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+'/ '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    
    return date;
}

$('#add').click(popupForm);

$('#btn-add').click(addTodo);

$('#btn-cancel').click(hideForm);

$('.delete').click(deleteTodo);

// $('.done').click(doneTodo);



function popupForm() {
    
    $('#todo-container').css("display", "none");
    
    $('#my-form').css("display", "block");
    
}


function hideForm() {

    $('#todo-container').css("display", "block");

    $('#my-form').css("display", "none");

    //clearing input fields

    $('#title').val('');

    $('#description').val('');

    $('#point').val('');

}

function deleteTodo(){

    var delete_id = $(this).attr('id');//store id of todo in "id"

    var todoIndex = todos.findIndex(todo => todo.id ===delete_id );//getting its index in the todo list

    todos.splice(todoIndex, 1);

    saveTodo();

    location.assign('./index.html');

}