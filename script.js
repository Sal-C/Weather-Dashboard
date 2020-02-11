


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
    
    })
})

