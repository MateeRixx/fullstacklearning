




//the  above code can be  broken as:

function constructor_function (resolve,reject)
{
    if (true) 
        {
            resolve("Success!"); // Call resolve if successful
        } 
        else {
            reject(new Error("Failure")); // Call reject if an error occurs
        }
    }
    

    

const my_promise=new Promise((resolve,reject)=>{

    let result=false;
    if(result){
       resolve(3+7);

    }
    else{
        reject(new Error("Result was false"));

    }
})


my_promise.then((data)=>{console.log(data)});
my_promise.catch((error)=>console.error(error));


