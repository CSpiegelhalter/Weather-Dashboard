$(document).ready(function() {
    $(".citySearch").on("click", function(e) {
        // alert("It works")
        e.preventDefault();
        console.log($("#userCity").val())
        weather()

    //     fetch (`https://api.openweathermap.org/data/2.5/forecast/daily?q=${$("#userCity").val()}&cnt=5&appid=9542d4c6783a974140e65af253cf4a14
    // `)
    //     .then (response => response.json())
    //     .then(data => console.log(data))

    
})



function weather() {
    var appID = "9542d4c6783a974140e65af253cf4a14";
    var city = $("#userCity").val()
    
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=9542d4c6783a974140e65af253cf4a14&units=imperial",
        method: "GET"
      }).then(function(response){
          console.log(response)

          var about = $(`<h2>${response.city.name} (${moment().format('L')}) <img src="http://openweathermap.org/img/wn/${response.list[0].weather[0].icon}.png"</h2>`);

          

          $(".temp").text("Temperature: " + response.list[0].main.temp)

          $(".humidity").text("Humidity: " + response.list[0].main.humidity)

          $(".wind").text("Wind Speed: " + response.list[0].wind.speed + "mph")

          $(".uv").text("Temperature: " + response.list[0].main.temp)

          $(".temp").prepend(about)

          var add = 0

          for (i in response.list) {

            
            if (i % 7 === 0) {
                
                add++
                console.log(add)


                var day = moment().add(add, 'days').format("L")
                var squares = $(`<div class="col-md-2" id="myForecast"></div>`)

                $(".forecast").append(squares)

                squares.append($(`<h6>${day}</h6>`))

                squares.append($(`<img src="http://openweathermap.org/img/wn/${response.list[i].weather[0].icon}.png">`))

                squares.append($(`<p>Temp: ${response.list[i].main.temp}F</p>`))

                squares.append($(`<p>${response.list[i].main.humidity}%</p>`))
                console.log(response.list[i].main.humidity)
                


            }

          }
          uvRender(response.city.coord.lat, response.city.coord.lon)
      })
    }}) 

    
function uvRender(lat, long){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&appid=9542d4c6783a974140e65af253cf4a14",
        method: "GET"
      }).then(function(response){
          console.log(response)
          $(".uv").text("UV Index: " + response.value)


    // $.ajax ({
    //     url: "https://api.openweathermap.org/data/2.5/weather?q=Pensacola&appid=9542d4c6783a974140e65af253cf4a14&units=imperial",
    
    //     method: "GET"
    //   }).then(function(response) {
    //       console.log(response)
    //       $(".city").text("City: " + response.name);
    //       $(".wind").text("Wind speed: "  + response.wind.speed);
    //       $(".humidity").text("Humidity: " + response.main.humidity);
    //       $(".temp").text("Temp: " + response.main.temp);
    //     });
})}
