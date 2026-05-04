const con=document.getElementById("container");

con.style.display="flex";
con.style.flexDirection="column";
con.style.justifyContent="center";
con.style.alignItems="center";


const heading_1=con.querySelector('h1');
heading_1.style.color="red";

const para=con.querySelector('p');


const btn_Div=document.getElementById("button-div");
btn_Div.style.padding="50px"
btn_Div.style.display="flex";
btn_Div.style.justifyContent="center";
btn_Div.style.alignItems="center";

// use some api to get quotes 




// function that will be called on click 


    const btn=document.getElementById("bn");
    btn.addEventListener('click',async ()=>{
const quotes=await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");
// console.log(quotes); this will show promise pending how to get actual data ? 

const data = await quotes.json();

para.textContent=`"${data.quote}"`;


    })








