

// $( window ).load(function() {
//    checkTodos();
//   });



var todos = getTodos();

var id = 1 ;
checkTodos();
function checkTodos() {
// console.log(!(jQuery.isEmptyObject(todos)));
    if(!(jQuery.isEmptyObject(todos))){

      displayTodos();

    }
    
}
// displayTodos();

function displayTodos() {
    
    var string="";

    $.each(todos, function(i, item){

                string +=                         
                                '<ul>' +
                                
                                    '<li>Title: '+ todos[i].Title +'</li>' +

                                    '<li>Description: '+ todos[i].Description +'</li>' +

                                    '<li>Point: '+ todos[i].Point +'</li>' +

                                    '<li>Date Created: '+ todos[i].CreatedAt +'</li>' +
                                                       
                                '</ul>' +
                                
                                '<div class="button-container">' +
                                    
                                    '<div id="delete">fv</div>' +    
                                        
                                    '<div id="done">vf</div>' +
                                        
                                '</div>' ;


                                
                           
                            
                            
                        });

    $('#todos').html(string);
console.log("hi");

}

function getTodos() {

    const todosString = localStorage.getItem("todos");

    if (todosString !== null) 

        return JSON.parse(todosString);
        
     else 

        return [];

}
// var todos=[];
function addTodo() {



    const date=getDate();


    todos.push({

        "id" :id,

        "Title":$('#title').val(),

        "Description":$('#description').val(),

        "Point":$('#point').val(),

        "IsDone":0,

        "CreatedAt":date,

    });

    saveTodo();

    id++;
    
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

function popupForm() {

    $('#todos').css("display", "none");

    $('#my-form').css("display", "block");
    
}

$('#btn-add').click(addTodo);

$('#btn-cancel').click(hideForm);

function hideForm() {

    $('#todos').css("display", "block");

    $('#my-form').css("display", "none");

    //clearing input fields

    $('#title').val('');

    $('#description').val('');

    $('#point').val('');

}