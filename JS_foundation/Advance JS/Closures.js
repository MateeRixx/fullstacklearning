

function outer(){
    let counter=63;

   return  function (){
        counter++;
        return counter;

    }

    

}

let increment=outer();

for(let it=0;it<10;it++){
    console.log(increment());

}

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}


for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}


