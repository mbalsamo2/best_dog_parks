$(document).on('turbolinks:load', function() {

  // REQUIREMENT 1: ajax request to show index of park features on park show page
  $('a#load_features').on('click', function(e) {
    e.preventDefault();
    console.log(this.href);
    $.get(this.href + ".json").done(function(data) {
      $('div.park_features').html('');
      data.forEach(function(feature) {
        var newFeature = new Feature(feature.id, feature.name, feature.rating, feature.comment);
        var formattedFeature = newFeature.formatFeatureIndex();
        $('div.park_features').append(formattedFeature);
      });
      // debugger
        // var newFeatureForm = '<form class="new-todo" id="new_feature" action="/features" accept-charset="UTF-8" method="post"><label for="feature_name">Create a New Feature</label><br><input type="text" name="feature[name]" id="feature_name" class="new_todo" placeholder="Feature Name"><br><br><input type="text" name="feature[rating]" id="feature_rating" class="new_todo" placeholder="Feature Rating (1-5)"><br><br><input type="text" name="feature[comment]" id="feature_comment" class="new_todo" placeholder="Feature Comment"><br><br><input type="submit"></form>';
        // var newFeatureForm = '<h3><%= link_to "Add a Park Feature", new_park_feature_path(@park), :id => "new_feature" %></h3>'
        // $('div.new_park_feature').html(newFeatureForm);
      })
      // history.pushState(null, null, '/features');
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

// make feautre object
function Feature(id, name, rating, comment) {
  this.id = id;
  this.name = name;
  this.rating = rating;
  this.comment = comment;
  // this.park_features = park_features;
}

function Park(id, name, address, features) {
  this.id = id;
  this.name = name;
  this.address = address;
  this.features = features;
}

// REQUIREMENT 5: Use of prototype to format
Feature.prototype.formatFeatureIndex = function() {
  var featureHtml = '';
  // debugger
  featureHtml += `<a href="/features/${this.id}" class="feature-title" data-id=` + this.id + '>' + this.name + '</a>';
  featureHtml += '<ul>';
  featureHtml += '<li> Rating: ' + this.rating + ' star(s)</li>';
  featureHtml += '<li> Comment: ' + this.comment + '</li>';
  featureHtml += '</ul>';
  return featureHtml;
}

// Park.prototype.formatFeatures = function() {
//   var html = '';
//   let features = this.features
//
//   for (let i = 0; i < features.length; i++) {
//     html += `<a href="/features/${features[i].id}">${features[i].name} </a>`;
//   }
//
//   return html
// })
//
