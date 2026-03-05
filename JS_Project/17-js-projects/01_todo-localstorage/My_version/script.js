document.addEventListener("DOMContentLoaded", () => {    
  // <-- so added an event listner to the dom itself such that our code runs when dom loads
  const todoInput = document.getElementById("todo-input");

  const addTaskButton = document.getElementById("add-task-btn");

  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // <-- parse karke isko orignal array main convert kar rahe hai taaki tasks array se compare kar sake

  tasks.forEach((task) => renderTask(task)); //<-- tasks array ke har elment let us call them as task par method apply karna hai renderTask  " a for each loop "

  //addding event listner to add task button  that when clicked ont the button well store the text data to tasktext if empty returned instanly

  addTaskButton.addEventListener("click", () => {
    const tasktext = todoInput.value.trim();
    if (tasktext === "") {
      return;
    }

    //if there is some text

    //make a object

    const newTask = {
      id: Date.now(), //<--- way to assign a random string
      text: tasktext,
      completed: false,
    };

    tasks.push(newTask); // <-- here added task to array
    saveTaskToLocal(); //<-- functiont call that saves array to local

    //cleaning the input

    todoInput.value = "";

    console.log(tasks);
  });

  // how to store objects to local storage instead of arrays

  //we'll make a function for that

  //function to read task from local storage

  function renderTask(task) {
    console.log(task);
    const li=document.createElement('li');
    li.setAttribute("data-id",task.id);
    if(task.completed)
    {
        li.classList.add('completed')  //<-- li element ko class provide kardi completed , 
    }
    li.innerHTML=`
    
    <span>${task.text}</span>
    <button>delete</button>
    
    `;

    li.addEventListener('click',(e)=>{
        
        if(e.target.tagName === 'BUTTON'){
            return ;

        }

        else{
            task.completed=!task.completed;
            li.classList.toggle('completed');
            saveTaskToLocal();    //<-- to stop event bubbling 


        }

    });

    li.querySelector('button').addEventListener('click',(e)=>{
        e.stopPropagation() // <-- event toggle from firing 
        tasks=tasks.filter(t=>t.id !==task.id)  // filter function 

        li.remove();
        saveTaskToLocal();



        //In JavaScript, the primary method for filtering an array is the built-in, higher-order Array.prototype.filter() method. It creates a new array with all elements that pass a test implemented by a provided callback function, without modifying the original array.
    })




    todoList.appendChild(li);
    
    
  }

  function saveTaskToLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //<--- here the setItem task key value such that key could be anydatatype but value should be of string also a particular type that could be  brought back to original form
  }

  // here local storage is not been updated rather re written every time

  // how to read from local storage

  //as long as the  web page loads for the first time :
  /* 
    1.) We'll read from the local storage 
    2.) then well store them to tasks array 
    3.) well call out method of render task in a loop so we can provide these task one by one 

*/
});

//Need to render task , also it just means displaying  things to dom 


