$(window).load(function(){
  topicsButtons(topics,'searchNames', '.buttons');
  $('.topicButton').on('click', function(){
    alert('event handlerworking');
  })

})

  var topics = ["space", "stars", "planets", "spaceships", "aliens", "spacebattles"];

function topicsButtons(topics, classAdder, buttonAdder){
    $(buttonAdder).empty();
	for (var i=0; i<topics.length; i++) {
      var myElement = $('<button>');  
      myElement.addClass("topicButton");      
      myElement.attr("data-type", topics[i]);     
      myElement.text(topics[i]);
      $(buttonAdder).append(a);
      // $("#buttons-view").append(a);
     }
  }
    // $("#button").on("click", function() {
    //   var key = "Wlr6m0r2PKy2X6cGhYt3xRpFVa01vrAC&";
    //   var queryURL = "http://api.giphy.com/v1/gifs/random?api_key="+ key +"tag="+ topics[1];
    //   $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).done(function(res) {
    //     var imageUrl = res.data.image_original_url;
    //     var spaceImage = $("<img>");
    //     spaceImage.attr("src", imageUrl);
    //     spaceImage.attr("alt", "space image");
    //     $(".images").prepend(spaceImage);
    //   });
    // });

