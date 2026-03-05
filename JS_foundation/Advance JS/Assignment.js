// 
function createCounter() {
    
    let counter=0;
    return function(){
        counter++;
        return counter;

    }
    
    
}

let increment=createCounter();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());



