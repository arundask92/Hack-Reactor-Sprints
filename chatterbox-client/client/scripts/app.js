// // YOUR CODE HERE:
//$(document).ready(function() {

// $.get('http://parse.sfm6.hackreactor.com/chatterbox/classes/messages', function(data) {
//   console.log('works', data);
//   $('#chat').html(`<div>${data}</div>`);
// });



class App {
  constructor() {
    this.server = 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages';
    this.init();
    this.clicked();
    this.currentRoom = 'lobby';
    this.dataCollection;
  }

  init() {
    setTimeout(() => {
      this.clearMessages();
      this.fetch();
    }, 500);
    $('#roomSelect').on('change', ( event ) => {
      event.preventDefault();
      var room = $("#roomSelect option:selected").text();
      this.currentRoom = room;
      this.filterByRoom(room);
    });
  }
  
  send(message) {
    $.ajax({
      type: 'POST',
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      beforeSend: (data) => {
        data.username = this.exitText(message.username);
        data.roomname = this.exitText(message.roomname);
        data.text = this.exitText(message.text);
      },
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: (data) => {
        $('#chats').prepend(`<div class="message animated pulse infinite"><h4 class="text-truncate">${this.exitText(message.username)}:</h4> <br> <p class="text-truncate">${this.exitText(message.text)}</p></div>`);
      },
      error: function() {
        console.log('failed');
      } 
    });
  }

  fetch() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'GET',
      data: {
        'skip': 75750,
        'limit': 100000
      },
      contentType: 'application/json',
      success: (data) => {
        this.dataCollection = data;
        this.rendering(data);
        this.renderRooms(data);
      },
      error: function (data) {
        console.error('chatterbox: Failed to get message', data);
      }
    });
  }

  clearMessages() {
    $('#chats').html('');
  }
  exitText(texts) {
    if(texts === undefined || texts === null) {
      return 'undefined';
    }
    return texts.replace(/[$*<>]/gi, ' ');
  }
  renderMessage(message) {
    $('#chats').append(`<div class="message animated pulse infinite"><h4 class="text-truncate">${this.exitText(message.username)}:</h4> <br> <p class="text-truncate">${this.exitText(message.text)}</p></div>`);
  }

  renderRoom(room) {
    var roomm = this.exitText(room);
    var option = document.createElement("option");
    option.value = roomm;
    option.innerHTML = roomm;
    $(option).attr('id', roomm);
    var $roomSelect = $('#roomSelect');
    $roomSelect.append(option);
  }
  
  rendering(data) {
    for (let i = data.results.length-1; i >= data.results.length-101; i--) {
      this.renderMessage(data.results[i]);
    } 
  }
  
  renderRooms(data) {
    let rooms = {};
    _.each(data.results, (roomList) => {
      let roomName = this.exitText(roomList.roomname);
      if (rooms[roomName] === undefined) {
        rooms[roomName] = roomName;
      }
    });
    for (let room in rooms) {
      this.renderRoom(room);
    } 
  }  

  handleUsernameClick() {
  
  }

  handleSubmit() {
    var messagee = {
      objectId: 'wFTHGEJ5z4',
      username: $('#username').val(),
      roomname: $('#roomCreate').val() || 'lobby',
      text: $('#message').val(),
      createdAt: new Date()
    };
    this.send(messagee);
  }
  clicked() {
    $("#submit").on('click', ( event ) => {
      event.preventDefault();
      this.handleSubmit();
    });
    $("#refresh").on('click', ( event ) => {
      event.preventDefault();
      this.init();
    });
  }

  filterByRoom(room) {
    var data = this.dataCollection;
    this.clearMessages();
    for (let i = data.results.length-1; i >= data.results.length-101; i--) {
      if (data.results[i].roomname === room) {
        console.log(data.results[i].roomname);
        this.renderMessage(data.results[i]);
      }
    }
  }
}
$(document).ready(function() {
  var app = new App();
});






