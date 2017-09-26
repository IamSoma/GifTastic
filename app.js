  $(function(){
    topicsButtons(topics,'searchNames', '.buttons');
  })

  var topics = ["space", "stars", "planets", "spaceships", "aliens", "spacebattles"];

function topicsButtons(topics, classAdder, buttonAdder){
    $(buttonAdder).empty();
	for (var i=0; i<topics.length; i++) {
      var a = $('<button>');  
      a.addClass("btn btn-primary");      
      a.attr("data-type", topics[i]);     
      a.text(topics[i]);
      $(buttonAdder).append(a);
      $("#buttons-view").append(a);
     }
  }

    // Event listener for our space-button
    $("#space-button").on("click", function() {

      // Storing our giphy API URL for a random space image
      var key = "Wlr6m0r2PKy2X6cGhYt3xRpFVa01vrAC&";
      var queryURL = "http://api.giphy.com/v1/gifs/random?api_key="+ key +"tag="+ topics[1];


      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(res) {
      	console.log(res);

        // Saving the image_original_url property
        var imageUrl = res.data.image_original_url;

        // Creating and storing an image tag
        var spaceImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        spaceImage.attr("src", imageUrl);
        spaceImage.attr("alt", "space image");

        // Prepending the spaceImage to the images div
        $(".images").prepend(spaceImage);
      });
    });

