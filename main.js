let city = document.querySelector("#searchQuery");
let btn = document.querySelector("#submit");
let temp = document.querySelector("#temp");
let h1 = document.querySelector("h1");
let description = document.querySelector("#description");
let body = document.querySelector("body");

let call = function()
{
        let searchCity= city.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=e91cada5e62740e0944039e1cb53fa38`).then( function(response)
        {
            return response.json();
        })
        .then( function(data){
            if(data.cod!==200)
            {
                temp.innerHTML="Can't find any results";
                h1.innerHTML="Weather";
                description.innerHTML="Description:"
            }
            else
            {
                temp.innerText=`${data.main.temp} \u00B0 C`;   
                h1.innerHTML =`Weather in ${city.value.toLowerCase()}`;
                let disc=data.weather[0].main;
                description.innerHTML=`Description: ${disc}`;
                if(disc==="Clouds")
                {
                    let extraDisc=data.weather[0].description;

                    if(extraDisc==="broken clouds")
                    {
                        body.style.backgroundImage= 'url("images/broken clouds.jpg")';
                    }
                    else if(extraDisc==="overcast clouds")
                    {
                        body.style.backgroundImage= 'url("images/cloudy.jpg")';
                    }
                    else{
                        body.style.backgroundImage= 'url("images/scattered clouds.jpg")';
                    }
                }
                else if(disc==="Clear")
                {
                    body.style.backgroundImage='url("images/clear.jpg")';
                }
                else if(disc==="Rain")
                {
                    body.style.backgroundImage='url("images/rain.jpg")';   
                }
                else if(disc==="Drizzle")
                {
                    body.style.backgroundImage='url("images/drizzle.jpg")';   
                }
                else if(disc==="Snow")
                {
                    body.style.backgroundImage='url("images/snow.jpg")';   
                }
                else if(disc === "Thunderstorm")
                {
                    body.style.backgroundImage='url("images/thunder.jpg")';
                }
                else if(disc==="Haze")
                {
                    body.style.backgroundImage='url("images/Haze.jpg")';
                }
                else if(disc==="Mist")
                {
                    body.style.backgroundImage='url("images/mist.jpg")'
                }
                else
                {
                    body.style.backgroundImage='url("images/clear.jpg")';
                }
                city.value="";
            }
        });
}

btn.addEventListener("click",call);
city.addEventListener("keypress",function(e)
{
    if(e.key=="Enter")
    {
        call();
    }
});
