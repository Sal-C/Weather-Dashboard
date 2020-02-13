var city;


$(".searchbar").on("click", function() {
    city = document.querySelector(".user-input").value;
    cardbody()
})

function cardbody() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";
    console.log(city);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          //new li
          var newLi = $("<li>").addClass("list-group-item cityValue").text(response.name);
          $(".city-list").append(newLi)
          
          $(".city").text(response.name);
          $(".temp").text("Temperature: " + response.main.temp + "°F");
          $(".humidity").text("Humidity: " + response.main.humidity + "%");
          $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
          
          //uv
          var latitude = response.coord.lat;
          var longitude = response.coord.lon;
          uvURL = "https://api.openweathermap.org/data/2.5/uvi?appid=166a433c57516f51dfab1f7edaed8413&lat=" + latitude + "&lon=" + longitude;
          $.ajax({
              url: uvURL,
              method: "GET"
          }).then(function(response){
            $(".UV").text("UV: " + response.value);
             if (response.value <= 2){
                $(".UV").removeClass("text-success text-danger text-warning")
                $(".UV").addClass("text-success")
             }else if (response.value >= 8) {
                $(".UV").removeClass("text-success text-danger text-warning")
                $(".UV").addClass("text-danger")
            } else {
                $(".UV").removeClass("text-success text-danger text-warning")
                $(".UV").addClass("text-warning")
            }
            forecast()
          })
          
          
    
    })
    
}

function forecast(){
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413"
    $.ajax({
        url: forecastURL,
        method: "GET"
      }).then(function(response) {
          var day1 = JSON.stringify(response.list[2].dt_txt)
          $(".date-1").text(day1.substring(0,11));
          var day2 = JSON.stringify(response.list[10].dt_txt)
          $(".date-2").text(day2.substring(0,11));
          var day3 = JSON.stringify(response.list[18].dt_txt)
          $(".date-3").text(day3.substring(0,11));
          var day4 = JSON.stringify(response.list[26].dt_txt)
          $(".date-4").text(day4.substring(0,11));
          var day5 = JSON.stringify(response.list[34].dt_txt)
          $(".date-5").text(day5.substring(0,11));
          $(".f-temp-1").text("Temp: " + response.list[2].main.temp + "°F");
          $(".f-temp-2").text("Temp: " + response.list[10].main.temp + "°F");
          $(".f-temp-3").text("Temp: " + response.list[18].main.temp + "°F");
          $(".f-temp-4").text("Temp: " + response.list[26].main.temp + "°F");
          $(".f-temp-5").text("Temp: " + response.list[34].main.temp + "°F");
          $(".f-hum-1").text("Humidity: " + response.list[2].main.humidity + "%");
          $(".f-hum-2").text("Humidity: " + response.list[10].main.humidity + "%");
          $(".f-hum-3").text("Humidity: " + response.list[18].main.humidity + "%");
          $(".f-hum-4").text("Humidity: " + response.list[26].main.humidity + "%");
          $(".f-hum-5").text("Humidity: " + response.list[34].main.humidity + "%");

          //Icons
          $("#icon1").attr('src', "http://openweathermap.org/img/w/" + response.list[2].weather[0].icon + ".png");
          $("#icon2").attr('src', "http://openweathermap.org/img/w/" + response.list[10].weather[0].icon + ".png");
          $("#icon3").attr('src', "http://openweathermap.org/img/w/" + response.list[18].weather[0].icon + ".png");
          $("#icon4").attr('src', "http://openweathermap.org/img/w/" + response.list[26].weather[0].icon + ".png");
          $("#icon5").attr('src', "http://openweathermap.org/img/w/" + response.list[34].weather[0].icon + ".png");
    })
}

// function historySearch(){
//     alert("hi")
// }

// $(".cityValue").click(function(){
//     alert(this.val())
// })


