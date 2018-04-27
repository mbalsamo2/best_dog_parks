$(document).ready(function() {
  $("a#load_features").on("click", function(e) {

    // $.get(this.href).success(function(data) {
    //   $("div.park_features").html(data)
    // })

    $.ajax({
      method: "GET",
      url: this.href
    }).done(function(data) {
        $("div.park_features").html(data);
      })

    e.preventDefault();
  });
})
