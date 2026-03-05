function Person(name,age) {
    this.name=name;
    this.age=age;
    if(age<=0){
       throw new Error("Age is not positive");
    }
    
    console.log(`Hello, my name is ${name}`);
    
}

