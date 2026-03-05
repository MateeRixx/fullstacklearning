document.addEventListener("DOMContentLoaded", ()=>{

    //take inputs 

    const cityInput=document.getElementById("city-input");
    const  getWeatherBtn=document.getElementById("get-weather-btn");
    const  getWheatherInfo=document.getElementById("weather-info");
    const cityNameDisplay=document.getElementById("city-name");
    const temperatureDisplay=document.getElementById("temperature");
    const descriptionDisplay=document.getElementById("description");
    const errorMessage=document.getElementById("error-message");

    //a place holder for our API

    const API_KEY="1afc73a40dbac12406686000649c01f9"; //env variables



    getWeatherBtn.addEventListener('click',async()=>{
       const city=cityInput.value.trim()
        if(!cityInput)
        {
            return ;

        }

        //may throw error and always in another continent 

         try
         {
           const data=await fetchWeatherData(city);
           displayWeatherData(data);


         }

         catch(error){

            showError()
         }


    })


    //some set of function that will do stuff 

    async function fetchWeatherData(city)
    {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
 
        const response = await fetch(url);
        console.log(typeof(response));
        console.log(" RESPONSE ",response);
    
        if(! response.ok)
        {
            throw new Error("City Not found");

        }

        const data=await response.json();
        return data ;


    }

    function displayWeatherData(data)
    {
        console.log(data);
        const {name,main,weather}=data;
        cityNameDisplay.textContent=name;


        //unlock the display 
        getWheatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        //

        temperatureDisplay.textContent=`Temperature:${main.temp}`;
        descriptionDisplay.textContent=`Weather:${weather[0].description}`;


    }





    function showError(){
        getWheatherInfo.classList.remove("hidden"); //<-- adding a class to a element 
        errorMessage.classList.add('hidden'); //<-- removing the class 

    }







})