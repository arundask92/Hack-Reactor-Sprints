/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function() {
  // TODO: your solution here
  //keep count of rounds
  //   var rounds = 0;
  //array of choices
  var choices = ["rock", "paper", "scissors"];
  //array of answers
  var answers = [];
  var final = [];
  for (var i = 0; i < choices.length; i++) {
    //randomize pick from choices array
    answers.push(choices[Math.floor(Math.random() * choices.length)]);
    final.push(answers);
  }
  return final;
};

console.log(rockPaperScissors());
