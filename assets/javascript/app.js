// var api = "http://api.giphy.com/v1/gifs/search?";
// var apiKey = "&api_key=dc6zaTOxFJmzC";
// var query = "&q=" + topic  
// var topic = ""

var topics = ['cheesecake', 'ice cream', 'cookies', 'brownies', 'cupcakes', 'lollipop', 'pie', 'gingerbread', 'doughnuts', 'pudding'];

function dessertGifs() {
  var desserts = $(this).attr('data-name')
  var queryUrL = "http://api.giphy.com/v1/gifs/search?q=" + desserts + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryUrL,
    method: "GET"
  }).done(function(response){
    var results = response.data;

    for(var i = 0; i < results.length; i++) {
      var dessertDiv = $("<div></div>");
      var rate = results[i].rate;
      var stopAnimate = results[i].images.fixed_width_still.url;
      var resumeAnimate = results[i].images.fixed_width.url;
      var p = $("<p>").text("Rating: " + rate);

      var dessertGif = $("<img>");
      dessertGif.attr("src", stopAnimate).attr("data-still", stopAnimate).attr("data-animate", resumeAnimate).attr("data-state", "still").attr("class", "gif");
      dessertDiv.prepend(p);
      dessertDiv.prepend(dessertGif);
      $("#dessert-gifs").prepend(dessertGif);

    };
  });
};

function createButtons() {
  $('#default-buttons').empty();

  for(var 1 = 0; i < topics.length; i++) {
    var btn = $("<button>");
    btn.addClass('desserts');
    btn.attr('data-name', topics[i]);
    btn.text(topics[i]);
    $('#default-buttons').append(btn);
  };

  $('#addDessert').on('click', function(event){
    event.preventDefault();
    var dessertInput = $("#dessert-input").val().trim();
    topics.push(dessertInput);

    createButtons();
  });
};

$(document).on("click", ".desserts", dessertGifs);

  createButtons();

  $(document).on('click', '.gif', function(){
    var state = $(this).attr('data-state');

    if (state == 'still') {
      var animate = $(this).attr("data-animate")
      $(this).attr("data-state", "animate").attr("src", animate)
    }else{
      var still = $(this).attr("data-still")
      $(this).attr("data-state", "still").attr("src", still);
    };
  });













