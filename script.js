$(document).ready(function() {
    $("#btn").on("click", function(e) {
        performSearch(e)
      });
})

function performSearch(e) {
    e.preventDefault();

    let request = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: {
            q: $('#city').val(),
            appid : '626f763f035535483913e5e07c836eb1',
            units : 'metric'
        }
    });

    request.done(function(resp) {
        formatSearch(resp)
    })
}

function formatSearch(jsonObj) {
    let cityName = jsonObj.name
    let cityWeather = jsonObj.weather[0].main
    let cityTemp = jsonObj.main.temp

    $('#city-name').text(cityName)
    $('#city-weather').text(cityWeather)
    $('#city-temp').text(cityTemp + 'Celsius')
}