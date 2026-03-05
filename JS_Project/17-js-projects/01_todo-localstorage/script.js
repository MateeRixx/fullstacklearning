
//Grabbing the buttons first so that we can perform actions on them 


const todo_input=document.getElementById('todo-input');

const add_task_button=document.getElementById('add-task-btn');

const todolist=document.getElementById('todo-list');

//storing our task

let task_array=[]

//how to add the task 
// well take the add button and add an event listner to it 

add_task_button.addEventListener('click',()=>{

   const task_text = todo_input.value.trim();

   //what above line is doing ? 
   // Trying to grab  a specific piece of data from an input field , clean up any extra spaces around it and stroing it in the task_text variable

   //checking if some one is adding task without entering something

   if(task_text===""){
    return;

   }

   const newTask={
    id:Date.now(),
    text:task_text,
    isCompleted: false
   }

   //the new task created above are been pushed into the task_array;


   task_array.push(newTask);
   savetask();
   todo_input.value="";//clear input 
   console.log(tasks);

   

   // console.log(task_array);


});



function savetask(){
   //our idea is to push the entire array to the browsers local storage 
   // also our local storage has an API that can be envovked usingn 'localStorage' keyword 

   localStorage.setItem('task',JSON.stringify(task_array));

   todo_input.value(newTask);
  

   
   //our local storage can store complex datatype like arrays there we need to store them in key value pair such that the key  can be anything but assumed to be string and the other parameter is a special string made using JSON.stringfy 


}






