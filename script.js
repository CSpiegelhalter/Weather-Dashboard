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
        url: "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=5&appid=9542d4c6783a974140e65af253cf4a14",
        method: "GET"
      }).then(function(response){
          console.log(response)
      })
      

    }})