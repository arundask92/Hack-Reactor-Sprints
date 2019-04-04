$(document).ready(function(){
    var count = streams.home.length - 1;
    var newest = function(user){
      if (user){
        var index = streams.users[user].length - 1;
      } else {
        var index = streams.home.length - 1;
      }  
      while(index >= 0) {
        if (user){
          var tweet = streams.users[user][index];
        } else {
          var tweet = streams.home[index];
        }
        $singleTweet = $('' +
        '<div class="messageBox">' +
        '<div class="row">' +
          '<div class="userName"><a href="#"   id="userTw" class='+ tweet.user +'>' +
            '@' + tweet.user +
          '</a></div>' +
          '<div class="timeStamp">' + 
            jQuery.timeago(tweet.created_at) +
          '</div><hr>' +
        '</div>' +
        '<div class="row">' +
          '<p class="tweet">' + 
            tweet.message + 
          '</p>' +
        '</div>' +
        '</div>');
      $singleTweet.hide().appendTo('#messages').fadeIn('slow');
      index -= 1;  
      };
      count = streams.home.length - 1;   
    }
    var tweetCount;
    var tweetTimer = function(){
      tweetCount = setInterval(function(){
        var countCheck = streams.home.length - 1;
        if (countCheck > count) {
          numTweets = countCheck - count;
          $('#newTweets').text(numTweets + ' New Tweets');
          $('#newTweetsDiv').slideDown('slow');
        }
      }, 3000);           
    }
    newest();
    tweetTimer();

    $('#newTweetLink').click(newTweets);
    function newTweets(e) {
        e.preventDefault();
        $('.messageBox').remove();
        newest();
        $('#newTweetsDiv').slideUp();
        clearInterval(tweetCount);
        tweetTimer();
    }

    $('#messages').on('click', 'a', function(e) {
    // $('#messages a').click(usersTweets);
    // function usersTweets(e) {
        e.preventDefault();
        $('.messageBox').remove();
        $('#currentTweets p').remove();
        $('#currentTweets h2').remove();
        var user = this.getAttribute('class');
        $usersTweets = $('' +
          '<h2 class="timeLinks">@' + user +'\'s timeline </h2>' +
          '<p class="timeLinks"><a href="#" id="allTweets">Go back to all Tweets</a></p>');
        newest(user);
        clearInterval(tweetCount);
        $usersTweets.appendTo('#currentTweets').fadeIn('slow');
        $('#newTweetsDiv').slideUp();
    });

    $('#currentTweets, #allTweets').click(allTweets);
    function allTweets(e) {
        e.preventDefault();
        $('.messageBox').remove();
        newest();
        $('#newTweetsDiv').slideUp();
        $('#currentTweets p').remove();
        $('#currentTweets h2').remove();
        $('<h2 class="timeLinks">All Tweets</h2>').appendTo('#currentTweets').fadeIn('slow');
        tweetTimer();
    }
  });



// $(document).ready(function(){
//   var count = streams.home.length - 1;
//   var latestTweets = function(user){
//     if (user){
//       var index = streams.users[user].length - 1;
//     } else {
//       var index = streams.home.length - 1;
//     }  
//     while(index >= 0) {
//       if (user){
//         var tweet = streams.users[user][index];
//       } else {
//         var tweet = streams.home[index];
//       }
//       $oneTweet = $('' +
//         '<div class="singleTweet row span7">' +
//           '<div class="row">' +
//             '<div class="userName span3"><a href="#" class='+ tweet.user +'>' +
//               '@' + tweet.user +
//             '</a></div>' +
//             '<div class="tweetTime span3 text-right">' + 
//               jQuery.timeago(tweet.created_at) +
//             '</div>' +
//           '</div>' +
//           '<div class="row">' +
//             '<p class="span7">' + 
//               tweet.message + 
//             '</p>' +
//           '</div>' +
//         '</div>');
//     $oneTweet.hide().appendTo('#tweetStream').fadeIn('slow');
//     index -= 1;  
//     };
//     count = streams.home.length - 1;   
//   }
//   var newTweetTimer;
//   var tweetTimer = function(){
//     newTweetTimer = setInterval(function(){
//       var countCheck = streams.home.length - 1;
//       if (countCheck > count) {
//         numTweets = countCheck - count;
//         $('#newTweetAlert').text(numTweets + ' new Tweets');
//         $('#newTweetsAvail').slideDown('slow');
//       }
//     }, 4000);           
//   }
//   latestTweets();
//   tweetTimer();
//   $('#newTweetLink').on('click', function(e){
//     e.preventDefault();
//     $('.singleTweet').remove();
//     latestTweets();
//     $('#newTweetsAvail').slideUp();
//     clearInterval(newTweetTimer);
//     tweetTimer();
//   });
//   // $('#tweetStream').on('click', 'a', function(e){
//   //   e.preventDefault();
//   //   $('.singleTweet').remove();
//   //   $('#feedViewing p').remove();
//   //   var user = this.getAttribute('class');
//   //   $nowViewingUser = $('' +
//   //     '<p>Timeline of:</p>' +
//   //     '<p>@' + user +'</p>' +
//   //     '<p><a href="#" id="entireFeed">Back to Entire Twittler Feed</a></p>');
//   //   latestTweets(user);
//   //   clearInterval(newTweetTimer);
//   //   $nowViewingUser.appendTo('#feedViewing').fadeIn('slow');
//   //   $('#newTweetsAvail').slideUp();
//   // });
//   $('#feedViewing').on('click', '#entireFeed', function(e){
//     e.preventDefault();
//     $('.singleTweet').remove();
//     latestTweets();
//     $('#newTweetsAvail').slideUp();
//     $('#feedViewing p').remove();
//     $('<p>Entire Twittler Feed</p>').appendTo('#feedViewing').fadeIn('slow');
//     tweetTimer();
//   });
// });