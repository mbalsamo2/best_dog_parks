$(document).ready(function() {
  $("a#load_features").on("click", function(e) {
    $.ajax({
      method: "GET",
      url: this.href
    }).done(function(data) {
        $("div.park_features").html(data);
      });
    e.preventDefault();
  });
})
