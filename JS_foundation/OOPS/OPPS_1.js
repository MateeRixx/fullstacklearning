
//making a construction function 

function Photo(name){
    
    if(!new.target){
        throw new Error("Bhen ke new keyword kon use karega");
    }
    this.name=name

    console.log(`${name} say cheese to get your photo clicked`);

    
}


let person=new Photo("Mohit");
console.log(person);


let person2=Photo("harshit");
console.log(person2);


