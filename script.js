


$(".searchbar").on("click", function() {
    var city = document.querySelector(".user-input").value;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";
    console.log(city);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          $(".city").text(response.name);
          $(".temp").text("Temperature: " + response.main.temp);
          $(".humidity").text("Humidity: " + response.main.humidity);
          $(".wind").text("Wind Speed: " + response.wind.speed);
          $(".UV").text("UV: " + response.weather.icon);
          var newLi = $("<li>").addClass("list-group-item").text(response.name);
          newLi.addClass("list-group-item").text(response.name);
          $(".city-list").append(newLi)
          forecast()
    
    })
})

function forecast(){
    var city1 = document.querySelector(".user-input").value;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city1 + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413"
    console.log(city1 + " and test");
    $.ajax({
        url: forecastURL,
        method: "GET"
      }).then(function(response) {
          $(".date-1").text(response.list[2].dt_txt);
          $(".date-2").text(response.list[10].dt_txt);
          $(".date-3").text(response.list[18].dt_txt);
          $(".date-4").text(response.list[26].dt_txt);
          $(".date-5").text(response.list[34].dt_txt);
          $(".f-temp-1").text(response.list[2].main.temp);
          $(".f-temp-2").text(response.list[10].main.temp);
          $(".f-temp-3").text(response.list[18].main.temp);
          $(".f-temp-4").text(response.list[26].main.temp);
          $(".f-temp-5").text(response.list[34].main.temp);
          $(".f-hum-1").text(response.list[2].main.humidity);
          $(".f-hum-2").text(response.list[10].main.humidity);
          $(".f-hum-3").text(response.list[18].main.humidity);
          $(".f-hum-4").text(response.list[26].main.humidity);
          $(".f-hum-5").text(response.list[34].main.humidity);
          //response.list[i].weather[{main[1],icon[3]
    
    })

}

