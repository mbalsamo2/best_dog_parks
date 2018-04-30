$(document).on('turbolinks:load', function() {

  // ajax request to show index of park features on park show page
  $('a#load_features').on('click', function(e) {
    e.preventDefault()
    console.log(this.href)
    $.get(this.href).done(function(data) {
      $('div.park_features').html(data)
      $('a#load_features').toggle();
    })
  })

  // ajax request to show new features form on park show page
  $(document).on('click', 'a#new_feature', function(e) {
    e.preventDefault()
    // console.log(this.href)
    $.ajax({
      method: "GET",
      url: this.href
    }).done(function(response) {
      $("div.new_park_feature").html(response);
    })
  })

// create feature hijack post
//function(e)
// preventDefault
// $.ajax
// data
// .serialize

})


// does not work
// $(document).ready(function() {
//   $("a#load_features").on("click", function(e) {
//
//     // $.get(this.href).success(function(data) {
//     //   $("div.park_features").html(data)
//     // })
//     e.preventDefault();
//   // ajax request to show index of park features on park show page
//     $.ajax({
//       method: "GET",
//       url: this.href
//     }).done(function(data) {
//         $("div.park_features").html(data);
//       })
//   });
// })

// does not work
// document.addEventListener("turbolinks:load", function() {
//   $("a#load_features").on("click", function(e) {
//     e.preventDefault();
//
//     $.ajax({
//       method: "GET",
//       url: this.href
//     }).done(function(data) {
//         $("div.park_features").html(data);
//   })
// })

// does not work
// $(document).on('page:change', function() {
//   $("a#load_features").on("click", function(e) {
//     e.preventDefault();
//
//     $.ajax({
//       method: "GET",
//       url: this.href
//     }).done(function(data) {
//         $("div.park_features").html(data);
//   })
// })
