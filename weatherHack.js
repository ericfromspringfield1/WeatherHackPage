let appId = 'c9867bcb23d64d9aa1d083b7af5ee342'
let units = 'imperial'
let searchMethod;


function getSearchMethod(searchTerm) {
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm) 
        searchMethod = 'zip';  
    else 
    searchMethod = 'q'; 
    
    if(searchTerm.length < 5 || searchTerm.length > 5 && Number.parseInt(searchTerm + '' === searchTerm)) 
      alert("Please enter a valid city or zip code") 
      
    }

    


    function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch((`https://api.weatherbit.io/v2.0/current?&city=${searchTerm},state=${searchTerm}&units=${units}&key=${appId}`))
    
        .then(result => {
            return result.json();
        })
        .then(result => {
            init(result)
        })
    
    }

function init(resultFromServer) {
    switch (resultFromServer.data[0].weather.description) {
        case 'Clear':
            document.body.style.backgroundImage = 'url("saban.jpeg")'
            break;

        case 'Clouds':
        case 'Few clouds':
        case 'Scattered clouds':
            document.body.style.backgroundImage = 'url("saban.jpeg")'
            break;

        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("saban.jpeg")'
            break;

        case 'Thunderstorms':
            document.body.style.backgroundImage = 'url("saban.jpeg")'
            break;

        case 'Snow':
            document.body.style.backgroundImage = 'url("saban.jpeg")'
            break;


        default:
            break;

            
        }
        console.log(resultFromServer)

        let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader')
        let temperatureElement = document.getElementById('temperature')
        let humidityElement = document.getElementById('humidity')
        let windSpeedElement = document.getElementById('windSpeed')
        let cityHeader = document.getElementById('cityHeader')
        //let weatherIcon = document.getElementById('documentIconImg');
        let dewpointElement = document.getElementById('dewpoint')
        let sunriseElement = document.getElementById('sunrise')
        let sunsetElement = document.getElementById('sunset')
        
        //weatherIcon.src = `http://openweathermap.org/img/wn/${resultFromServer.weather[0].icon}.png`
        
        
        let resultDescription = resultFromServer.data[0].weather.description;
        let windSpeedMph = resultFromServer.data[0].wind_spd
        let windDirection = resultFromServer.data[0].wind_cdir
        let humidity = resultFromServer.data[0].rh
        let dewpoint = resultFromServer.data[0].dewpt
        let temperature = resultFromServer.data[0].temp
        let city = resultFromServer.data[0].city_name
        let state = resultFromServer.data[0].state_code
        let sunrise = resultFromServer.data[0].sunrise
        let sunset = resultFromServer.data[0].sunset
        
        //calculate dewpoint. Show it if humidity is at 50% or higher // 6.13.20 - when humidity 53%, divided by 2.8 to get 58 dewpoint
        
        //if dewpoint meets a certain condition - show an icon reflecting conditions
        /* let dewpoint = temperature - ((100 - humidity)/2.8)
        if (dewpoint > 61 && dewpoint < 70 && humidity >= 50) 
        dewpointElement.innerHTML = `&#128531 Dewpoint ${Math.floor(dewpoint)} &#176`
        
        
        if (dewpoint > 70 && humidity >= 50) 
        
        
        if (dewpoint < 61 && dewpoint < 70 &&humidity >= 50) 
        */
       
       
       let storage = window.localStorage
       function populateStorage() {
           storage.setItem('temp', temperature);
           storage.setItem('humidity', humidity);
           storage.setItem('dewpoint', dewpoint);
           storage.setItem('location', location);
           
           return storage
        }
        console.log(populateStorage())
        
        
        
        
        
        
        
        temperatureElement.innerHTML = `${Math.floor(temperature)} &#176`;
        dewpointElement.innerHTML = `Dewpoint ${Math.floor(dewpoint)}`
        dewpointElement.innerHTML = `Dewpoint ${Math.floor(dewpoint)}`
        
            
        windSpeedElement.innerHTML = `Winds out of the ${windDirection} at ${Math.floor(windSpeedMph)} mph`;
        cityHeader.innerHTML = `${city} ${state}`;
        humidityElement.innerHTML = `Humidity levels at ${humidity}%`
        sunriseElement.innerHTML = `&#9788 Sunrise ${sunrise}`
        sunsetElement.innerHTML = `&#9790 Sunset ${sunset}`
        weatherDescriptionHeader.innerText = resultDescription
    
        
        
        setPositionForWeatherInfo()
    }

    function setPositionForWeatherInfo() {
        let weatherContainer = document.getElementById('weatherContainer')
        let weatherContainerHeight = weatherContainer.clientHeight;
        let weatherContainerWidth = weatherContainer.clientWidth;

        weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`
        weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/1.3}px)`
        weatherContainer.style.visibility = 'visible'

    }
        
        document.getElementById('searchBtn').addEventListener('click', () => {
            let searchTerm = document.getElementById('searchInput').value;
            if(searchTerm)
            searchWeather(searchTerm)
        })



        document.getElementById('searchBtn').addEventListener('keyup', () => {
            let searchTerm = document.getElementById('searchInput').value;
            if(searchTerm)
            searchWeather(searchTerm)
        })

    
