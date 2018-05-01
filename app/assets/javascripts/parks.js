$(document).on('turbolinks:load', function() {

  // ajax request to show index of park features on park show page, works but will try to append
  $('a#load_features').on('click', function(e) {
    e.preventDefault()
    console.log(this.href)
    $.get(this.href).done(function(data) {
      $('div.park_features').html(data)
      $('a#load_features').toggle();
    })
  })

// attemp to get features to load through new feature object
  // $('a#load_features').on('click', function(e) {
  //   e.preventDefault()
  //   console.log(this.href)
  //   $.get(this.href).done(function(data) {
  //     $('div.park_features').html("");
  //     debugger
  //     data.forEach(function(feature) {
  //       var newFeature = new Feature(feature.name, feature.rating, feature.comment, feature.park_features);
  //       var formattedFeature = newFeature.formatFeatureIndex();
  //       $('div.park_features').append(formattedFeature);
  //     })
  //   })
  // })

// attemp to get features to load through new park object
  // $('a#load_features').on('click', function(e) {
  //   e.preventDefault()
  //   console.log(this.href)
  //   $.get(this.href).done(function(resp) {
  //     $('div.park_features').html("");
  //
  //       var park = new Park(resp.id, resp.name, resp.address, resp.features);
  //       var formattedFeature = park.formatFeatures();
  //       debugger
  //       $('div.park_features').append(formattedFeature);
  //     })
  //   })


  // ajax request to show new features form on park show page
  $(document).on('click', 'a#new_feature', function(e) {
    e.preventDefault()
    // console.log(this.href)
    // $.get(this.href.done(function(data) {
    //   $('div.new_park_feature').html(response);
    // })

    $.ajax({
      method: "GET",
      url: this.href
    }).done(function(response) {
      $('div.new_park_feature').html("");
      $('div.new_park_feature').html(response);
    })
  })


     // submit new feature via ajax
  // $('form#new_feature').on('submit', 'form#new_feature', function(e) {
  //     e.preventDefault()
  //     $.ajax({
  //       method: "POST",
  //       url:
  //       data:
  //
  //     })
  //       console.log("hey")
  //       alert("twas clicked!")
  //   })

})

// make feautre object
function Feature(id, name, rating, comment) {
  this.id = id;
  this.name = name;
  this.rating = rating;
  this.comment = comment;
  this.park_features = park_features;
}

function Park(id, name, address, features) {
  this.id = id;
  this.name = name;
  this.address = address;
  this.features = features;
}

Feature.prototype.formatFeatureIndex = function() {
  var featureHtml = '';
  featureHtml += '<a href="#" class="feature-title" data-id=' + this.id + '>' + this.name + '</a>';
  featureHtml += '<ul>';
  featureHtml += '<li> Rating:' + this.rating + 'stars</li>';
  featureHtml += '<li> Comment:' + this.comment + '</li>';
  featureHtml += '</ul>';
}

Park.prototype.formatFeatures = function() {
  var html = '';
  let features = this.features

  for (let i = 0; i < features.length; i++) {
    html += `<a href="/features/${features[i].id}">${features[i].name} </a>`;
  }

  return html
}



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
