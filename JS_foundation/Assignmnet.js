//first function 

function stringToNumber(input)
{
    let numb;
    let ans;
    if(isNaN(numb=Number(input)))
    {

        ans=("Not a number");
    }

    else{
        ans=Number(input);

    }

    return ans;

}

// console.log(stringToNumber("bajif24"));


function flipBoolean(input){
   
    let ans=0;
    if(input==true || input==1)
    {
        ans=false;
    }

    else{
        ans=true;

    }

    return ans;


}

// console.log(flipBoolean(1));


//function -3 :

function whatAmI(input){
    let ans;
    if(typeof(input)=="number"){
       ans=("I'm a number!");
    }

    if(typeof(input)=='string'){
        ans=("I'm a string!");
    }

    return ans;
}

// console.log(whatAmI(234));


//function -4:

function isItTruthy(input){
    let ans;
    if(input===true){
        ans=`it's truthy!`;
    }
    if(input===false)
    {
        ans=`it's falsey!`;
    }

    return ans;

}

// console.log(isItTruthy(false));


// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add(a,b) {
    return (a+b);
}

// Subtract small value from larger one
function subtract(a,b) {
    return (Math.max(a,b)-Math.min(a,b));
}

function multiply(a,b) {
    return (a*b);
}

// Divide larger value by small
function divide(a,b) {
    return (Math.max(a,b)/Math.min(a,b))
}

// Increase value of a by 1
function increment(a) {
    a++;
    return a;
    
    
}

// Decrease value of b by 1
function decrement(b) {
     b--;
     return b;
}

// Divide larger value by small to find the reminder
function reminder() {
    return (Math.max(a,b)%Math.min(a,b))
}

// console.log(65 % 5);

function sumofN(n){
    return (n*(n+1)/2);

}

// console.log(sumofN(23));

function printMultiplicationTable(n) {
  let table=[];
  for(let i=1;i<=10;i++){
      table.push(`${n} X ${i}=${n*i}`)
  }
  
  return table;
  
}

// console.log(printMultiplicationTable(18));

function countVowels(str) {
    
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='A'|| str[i]==='a'||str[i]==='E'|| str[i]==='e'||str[i]==='I'|| str[i]==='i'||str[i]==='O'|| str[i]==='o'||str[i]==='U'|| str[i]==='u')
        {
           count++; 
        }
        else{
            continue;
        }
    }
    
    return count;
    
}


console.log(countVowels("mohIt"));







