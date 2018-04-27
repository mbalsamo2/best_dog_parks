$(document).ready(function() {
  $("a#load_features").on("click", function(e) {
    $.ajax({
      method: "GET",
      url: "/parks/4/features"
    })
      .done(function(data) {
        console.log(data)
      })

    e.preventDefault();
  });
})
