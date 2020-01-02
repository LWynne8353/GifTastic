$(document).ready(function () {

  $("button").on("click", function () {
    // Grabbing and storing the data-muppet property value from the button
    muppets = $(this).attr("data-muppets");

    var queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + muppets + "api_key=8zRpsfahc5Fqb30C0sk05hJ2YhNm5AZU&&q=randomize and shuffle react&limit=10&offset=&rating=PG-13&lang=en");

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);
    });
  })

});