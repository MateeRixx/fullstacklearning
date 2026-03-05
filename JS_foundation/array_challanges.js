
let teaFlavours=["greenTea","BlackTea","OolongTea","OrangeTea"];
let tea_2=teaFlavours;//make a soft copy 

//how to make a hard coopy 

let tea_3=[...teaFlavours];
let tea_4=teaFlavours.slice();


//" ... --> this is known as rest and spreak opertor ";


let firstTea=teaFlavours[0];
console.log(firstTea);



//Problem 2

let cities=["London","Tokyo","Paris","New York"];

let favouriteCity=cities[2];
console.log(favouriteCity);

//Problem 3 


teaFlavours[1]="HearbalTea";
console.log(teaFlavours);


teaFlavours.push("RoseTea");
console.log(teaFlavours);


let lastorder=teaFlavours.pop();
console.log(lastorder);
console.log(teaFlavours);



let merged_array=[...cities,...teaFlavours];
console.log(merged_array);


console.log(teaFlavours.includes("OrangeTea"));


