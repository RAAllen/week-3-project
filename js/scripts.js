$(document).ready(function() {
  $("#userNumber").submit(function(event) {
    event.preventDefault();
    var userValue = parseInt($("input#userInput").val());
    
    for (i=1; i<=userValue; i++) {
      if (i % 15 === 0) {
        $(".results").prepend("<li>pingpong</li>")
      }
      else if (i % 5 === 0) {
        $(".results").prepend("<li>pong</li>")
      }
      else if (i % 3 === 0) {
        $(".results").prepend("<li>ping</li>")
      }
      else {
        $(".results").prepend("<li>"+i+"</li>")
      }
    }
  });
});
