document.getElementById('changeTextButton').addEventListener('click',function(){
    
    let paragraph=document.getElementById('myParagraph')
    paragraph.textContent="The para just changed "


})

// example-2

document.getElementById('highlightFirstCity').addEventListener('click', function(){
    let firstList=document.getElementsByTagName('li');
    //how to inject class to an element 
    firstList[0].classList.add("highlight");

})

// example-3

document.getElementById("changeOrder").addEventListener('click',function(){
    let Order=document.getElementById('coffeeType');
    Order.textContent="Expresso";
    Order.style.backgroundColor="brown";


})

//example-4 how to create element on certain event 

document.getElementById("addNewItem").addEventListener('click',function(){
//    let newItem= document.createElement('li')
//    newItem.textContent="Eggs";
let tasklist=document.getElementById('tasklist');
    tasklist.lastElementChild.remove();
    
    

})

// Part -2 of Task 


// Example -6
document.getElementById("clickMebutton").addEventListener("click",function(){
    alert("chai code");
});

//example 7

document.getElementById('teaList').addEventListener('click',function(event){
    if(event.target && event.target.matches('.teaItem'))
    {
        alert("You selected: "+ event.target.textContent);

    }
});




//form handling 

//first get the access to the formm 

document.getElementById('feedbackForm').addEventListener('submit',function(event){
    document
    .getElementById("feedbackForm")
    .addEventListener("submit",function(event){
        event.preventDefault();
        let feedback=document.getElementById('feedbackInput')
    })
})

//most of the time is to stop the default behaviour of the form that is to submit 


//example-9 change message when dom is loaded 

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domStatus').textContent="Dom fully loaded"
})


//example-10

document.getElementById("toggleHighlight").addEventListener('click',function(){
    let descriptiponText=document.getElementById('descriptionText');
    descriptiponText.classList.toggle('highlight');


})




