$(document).ready(function() {
  $("a#load_features").on("click", function(e) {
    $.ajax({
      method: "GET",
      url: this.href
    })
      .done(function(data) {
        console.log(data)
        $("div.park_features").append(data);
      })

    e.preventDefault();
  });
})
