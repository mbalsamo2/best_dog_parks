$(document).ready(function() {
  $("a#load_features").on("click", function(e) {

    // $.get(this.href).success(function(data) {
    //   $("div.park_features").html(data)
    // })

  // ajax request to show index of park features on park show page
    $.ajax({
      method: "GET",
      url: this.href
    }).done(function(data) {
        $("div.park_features").html(data);
      })

    e.preventDefault();
  });

  // ajax request to show new features form on park show page
  $("input#new_feature").on("click", function(e) {
    $.ajax({
      method: "GET",
      url: "/parks/4/features/new"
    }).done(function(response) {
      console.log(response)
    })

    e.preventDefault();
  });


})
