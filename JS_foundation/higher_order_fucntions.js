
// function makeTea (typeoftea){
//     console.log(`let make some ${typeoftea}`)
// }



// function processTeaOrder(tea){
   
//     return tea("earl grey");

// }

// let order=processTeaOrder(makeTea);
// console.log(order);

//first class function 

//another function 

function createTeaMaker() {
    return function (teatype){
        return (`making ${teatype}`);
    };
}


let teaMaker=createTeaMaker();
console.log(teaMaker("Oolon tea"));
