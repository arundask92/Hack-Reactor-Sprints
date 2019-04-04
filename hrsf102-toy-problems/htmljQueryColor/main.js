$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  var words = $("p")
    .text()
    .split(" ");
  console.log(words);
  $("p").empty();
  $.each(words, function(i, v) {
    $("p").append($("<span>").text(v + " "));
  });

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  function randomRgb() {
    $("span").each((i, v) => {
      var col =
        "rgb(" +
        randomColor(255) +
        "," +
        randomColor(255) +
        "," +
        randomColor(255) +
        ")";
      $(v).css("color", `${col}`);
    });
  }

  function randomColor(num) {
    return Math.floor(Math.random() * num);
  }

  function myFunction() {
    setInterval(randomRgb, 1000);
  }

  myFunction();
});
