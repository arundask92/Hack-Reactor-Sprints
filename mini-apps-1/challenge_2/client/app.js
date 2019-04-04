const app = {
  init: function() {
    $("#form").on("submit", app.onSubmit);
    app.onGet();
  },

  onGet: data => {
    $.ajax({
      url: "/data",
      method: "GET",
      success: data => {
        // console.log("hello world", data);
        // app.init();
      },
      error: () => {
        console.log("no no no");
      }
    });
  },

  onSubmit: event => {
    event.preventDefault();
    var data = $("textarea").val();
    console.log("data", typeof data);
    $.ajax({
      url: "/data",
      method: "POST",
      contentType: "application/json",
      data: data,
      success: () => {
        app.onGet();
      }
    });
    $("textarea").val("");
  }
};

$(document).ready(app.init);
