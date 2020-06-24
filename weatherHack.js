let appId = 'da0bf32a21f97928a281f6c8328877bd'
let units = 'imperial'





function getWeather(weather) {
    getSearchMethod(searchTerm);
    fetch((`https://api.openweathermap.org/data/2.5/onecall?${searchMethod}=${searchTerm}&appid=${appId}&units=${units}`))
        .then(result => {
            return result.json();
        })
        .then(data => {
            console.log(data)
        })
}

function init(resultFromServer) {
   /* switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = 'url("clear.jpg")'
            break;

        case 'Clouds':
            document.body.style.backgroundImage = 'url("cloudy.jpg")'
            break;

        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("rain.jpg")'
            break;

        case 'Thunderstorms':
            document.body.style.backgroundImage = 'url("storm.jpg")'
            break;

        case 'Snow':
            document.body.style.backgroundImage = 'url("snow.jpg")'
            break;


        default:
            break;

        }
        */
        console.log(resultFromServer)
    }