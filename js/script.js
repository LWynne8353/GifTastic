$(document).ready(function () {

  $("button").on("click", function () {
    // Calling on what muppet gifs to get
    muppets = $(this).attr("data-muppets");
    //queryURL to gather the gifs
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8zRpsfahc5Fqb30C0sk05hJ2YhNm5AZU&q=" + muppets + "&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);

      var muppet = response.data;

      for (var i = 0; i < muppet.length; i++) {
        if (muppet[i].rating !== "r" && muppet[i].rating !== "pg-13") {
          var imageDiv = $("<div>");
          var p = $("<p>").text("Rating: " + muppet[i].rating);
          var muppetGif = $("<img>");
          muppetGif.attr("src", muppet[i].images.fixed_height.url);

          imageDiv.append(p);
          imageDiv.append(muppetGif);
          $("#muppetsgiphys").prepend(imageDiv);
        }
      }
    });
  })

});