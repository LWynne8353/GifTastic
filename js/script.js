$(document).ready(function(){
  var muppets = ["KermittheFrog","MissPiggy", "RizzotheRat", "SwedishChef", "FozzieBear","GonzotheGreat", "StatlerandWaldorf", "Dr.BunsenHoneyDew","Beaker","Animal"]
}

var query = ("https://api.giphy.com/v1/gifs/search?q=" + muppets + "api_key=8zRpsfahc5Fqb30C0sk05hJ2YhNm5AZU&");

$.ajax({
    url: queryURL,
   method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
  });