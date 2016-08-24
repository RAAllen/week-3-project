//business logic
var pingPong = function(userValue) {
  for (i=1; i<=userValue; i++) {
    if (i % 15 === 0) {
      $("#results").append("<li>pingpong</li>");
    }
    else if (i % 5 === 0) {
      $("#results").append("<li>pong</li>");
    }
    else if (i % 3 === 0) {
      $("#results").append("<li>ping</li>");
    }
    else {
      $("#results").append("<li>"+i+"</li>");
    }
  }
}
//user logic
$(document).ready(function() {
  $("#userNumber").submit(function(event) {
    event.preventDefault();
    $("#results").empty();
    var userInput = parseInt($("input#userInput").val());
    pingPong(userInput);
  });
});
