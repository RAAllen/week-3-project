$(document).ready(function() {
  $("#userNumber").submit(function(event) {
    event.preventDefault();

    var userValue = parseInt($("input#userInput").val());
    var ppBall = [userValue];
    console.log(ppBall);

    for (i=0; i<=userValue; i++) {
      if (ppBall[i] % 15 === 0) {
        $(".results").prepend("<li>pingpong</li>")
      }
      else if (ppBall[i] % 5 === 0) {
        $(".results").prepend("<li>pong</li>")
      }
      else if (ppBall[i] % 3 === 0) {
        $(".results").prepend("<li>ping</li>")
      }
      else {
        $(".results").prepend("<li>"[i]"</li>")
      }
    }
  });
});
