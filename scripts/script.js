

// $( window ).load(function() {
//    checkTodos();
//   });



var todos = getTodos();

// var doneTodos=getDoneTodos();

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
                                '<div class="todos" id ='+ todos[i].id+'><ul>' +
                                
                                    '<li>Title: '+ todos[i].Title +'</li>' +

                                    '<li>Point: '+ todos[i].Point +'</li>' +
                                    
                                    '<li>Description: '+ todos[i].Description +'</li>' +

                                    '<li>Date Created: '+ todos[i].CreatedAt +'</li>' +
                                                       
                                '</ul>' +
                                
                                '<div class="button-container">' +
                                    
                                    '<button  class="delete">Delete</button>' +    
                                    
                                    '<button  class="edit">Edit</button>' +    
                                    
                                    '<button  class="done">Done</button>' +
                                        
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

        "Title":$('#add-title').val(),

        "Description":$('#add-description').val(),

        "Point":$('#add-point').val(),

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

$('#add').click(popupAddForm);

$('#btn-add').click(addTodo);

$('#add-form-btn-cancel').click(hideAddForm);

$('.delete').click(deleteTodo);

$('.done').click(doneTodo);

$('.edit').click(popupEditForm);

$('#btn-edit').click(editTodo);

$('#edit-form-btn-cancel').click(hideEditForm);


function popupAddForm() {
    
    $('#todo-container').css("display", "none");
    
    $('#edit-form').css("display", "none");
    
    $('#add-form').css("display", "block");
    
}

function popupEditForm() {
    
    $('#todo-container').css("display", "none");
    
    $('#add-form').css("display", "none");
    
    $('#edit-form').css("display", "block");
    
}


function hideAddForm() {

    $('#todo-container').css("display", "block");

    $('#add-form').css("display", "none");
    
    $('#edit-form').css("display", "none");

    //clearing input fields

    $('#add-title').val('');

    $('#add-description').val('');

    $('#add-point').val('');

}

function hideEditForm() {

    $('#todo-container').css("display", "block");

    $('#add-form').css("display", "none");
    
    $('#edit-form').css("display", "none");

    //clearing input fields

    $('#edit-title').val('');

    $('#edit-description').val('');

    $('#edit-point').val('');

}

function deleteTodo(){

    var delete_id = $(this).parents(':eq(1)').attr('id');
    

    var todoIndex = todos.findIndex(todo => todo.id ===delete_id );//getting its index in the todo list

    todos.splice(todoIndex, 1);

    saveTodo();

    location.assign('./index.html');

}

function doneTodo(){

    var done_id = $(this).parents(':eq(1)').attr('id');//store id of todo in "id"

    $('#'+done_id).css("background-color","yellow");

    // location.assign('./index.html');

}

function editTodo() {

   var edit_id = $(this).parents(':eq(1)').attr('id');

    let editIndex = todos.findIndex(todo => todo.id ===edit_id );

    todos.splice(editIndex, 1);
    todos.push({

        "id" :edit_id,

        "Title":$('#edit-title').val(),

        "Description":$('#edit-description').val(),

        "Point":$('#edit-point').val(),

        "IsDone":0,

        "CreatedAt":todos[todoIndex].CreatedAt,

    });

    
    saveTodo();

    
}