

// let teas=["green tea","black tea","chai","oolong tea"];
// let selectedTeas=[];

// for(const tea of teas)
// {
//     if(tea=="chai")
//     {
//         break;
//     }

//     else{
//         selectedTeas.push(tea);
//     }
// }

// console.log(selectedTeas);

let cityPopulation={
"London":890000,
"New York":840000,
"Paris":220000,
"Berlin":350000
};

let chai=["earl grey","green tea","chai","oolong tea"];
let availabeTeas=[];

chai.forEach(tea => {
   if(tea==="chai")
   {
    return ;

   }

   else{
    availabeTeas.push(tea);
   }
});

// console.log(availabeTeas);


let numb=[2,4,7,9,7,7,87,2];
let doubled=[];

function doubler(num)
{
    if(num==7)
    {
        return 7;

    }

    return num*2;

}

for(let i=0;i<numb.length;i++)
{
    doubled.push(doubler(numb[i]));
}

console.log(doubled);



//for of loop 