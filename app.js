$(function(){
  topicsButtons(topics, 'searchButton', '.buttons');
})

var topics = ["space", "stars", "planets", "spaceships", "aliens", "spacebattles"];

function topicsButtons(topics, classAdder, areaToAddTo){
  $(areaToAddTo).empty();
	for (var i=0; i<topics.length; i++) {
      var foo = $('<button>');  
      foo.addClass(classAdder);      
      foo.attr("data-type", topics[i]);     
      foo.text(topics[i]);
      $(areaToAddTo).append(foo);
     }
   }
$(document).on("click",'.searchButton', function() {
  $('#searches').empty();
  var type = $(this).data('type'); 
  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+type+"&api_key=Wlr6m0r2PKy2X6cGhYt3xRpFVa01vrAC&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(res){ 
    for(var i=0; i<res.data.length; i++){
      var searchDiv = $('<div class="search-item">');
      var ratings = res.data[i].rating;
      var p = $('<p>').text('Rating: '+ratings);
      var animated = res.data[i].images.fixed_height.url;
      var still = res.data[i].images.fixed_height_still.url;
      var image = $('<img>');
      image.attr('src',still);
      image.attr('data-still',still);
      image.attr('data-animated', animated);
      image.attr('data-state','still');
      image.addClass('searchImage');
      searchDiv.append(p);
      searchDiv.append(image);
      $('#searches').append(searchDiv); 
    }
  });
});

$(document).on('click','.searchImage', function(){
  var state = $(this).attr('data-state');
  if(state=='still'){
    $(this).attr('src',$(this).data('animated'));
    $(this).attr('data-state','animated');
  } else {
    $(this).attr('src',$(this).data('still'));
    $(this).attr('data-state','still');
  }
})

$('#topicAdder').on('click', function(){
  var newSearch = $('input').eq(0).val();
  topics.push(newSearch);
  topicsButtons(topics, 'searchButton', '.buttons');
  return false;

})