// REQUIREMENT 3: reveals has-many relationship, a park has many features rendered on park show page
$(document).on('turbolinks:load', function() {
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
        // var newFeatureForm = '<form class="new-todo" id="new_feature" action="/features" accept-charset="UTF-8" method="post"><label for="feature_name">Create a New Feature</label><br><input type="text" name="feature[name]" id="feature_name" class="new_todo" placeholder="Feature Name"><br><br><input type="text" name="feature[rating]" id="feature_rating" class="new_todo" placeholder="Feature Rating (1-5)"><br><br><input type="text" name="feature[comment]" id="feature_comment" class="new_todo" placeholder="Feature Comment"><br><br><input type="submit"></form>';
        // var newFeatureForm = '<h3><%= link_to "Add a Park Feature", new_park_feature_path(@park), :id => "new_feature" %></h3>'
        // $('div.new_park_feature').html(newFeatureForm);
    });
    history.pushState(null, null, this);
  });
});


// REQUIREMENT 4: submit new feature via ajax
$(document).on('turbolinks:load', function() {
  $('#new_feature').on('submit', function(e) {
    e.preventDefault();
    url = this.action
    console.log(url)
    // debugger

    // data = {
    //   'authenticity_token': $("input[name='authenticity_token']").val(),
    //   'feature': {
    //     'name': $("#feature_name").val(),
    //     'rating': $("#feature_rating").val(),
    //     'comment': $("#feature_comment").val(),
    //   }
    // };
    // $.ajax({
    //   type: "POST",
    //   url: url
    //   data: {
    //     'authenticity_token': $("input[name='authenticity_token']").val(),
    //     'feature': {
    //       'name': $("#feature_name").val(),
    //       'rating': $("#feature_rating").val(),
    //       'comment': $("#feature_comment").val(),
    //     }
    //   success: function(response) {
    //   debugger
    //   }
    // })
  })
});


// REQUIREMENT 2: next feature button ALMOST WORKS
$(document).on('turbolinks:load', function() {

  $.get('/features.json', function(data) {
    featuresValues = $.map(data, function(e) {
      return e.id
    })
  })

  $('.js-next').on('click', function() {
    var nextIndex
    var dataIdIndex = featuresValues.indexOf(parseInt($('.js-next').attr('data-id')))
    if (dataIdIndex === featuresValues.length -1) {
      nextIndex = 0
    } else {
      nextIndex = dataIdIndex + 1
    }
    $.getJSON('/features/' + featuresValues[nextIndex], function(data) {

      $('#feature_show').html('')
      var aFeature = new Feature(data.id, data.name, data.rating, data.comment);
      var showFeature = aFeature.formatFeatureShow();
      $('#feature_show').append(showFeature)

    })
  })
});


// make feautre object
function Feature(id, name, rating, comment) {
  this.id = id;
  this.name = name;
  this.rating = rating;
  this.comment = comment;
}

// make park object
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

// REQUIREMENT 5: Use of prototype to format
Feature.prototype.formatFeatureShow = function() {
  var showHtml = '';
  showHtml += `<h1 id="name" data-id` + this.id + `>` + this.name + `</h1><br>`;
  showHtml += '<p> Rating: ' + this.rating + ' star(s)</p><br>';
  showHtml += '<p> Comment: ' + this.comment + '</p>';
  return showHtml;
}


// next park button
// $(document).on('turbolinks:load', function() {
//
//   $.get('/parks.json', function(data) {
//     parkValues = $.map(data, function(e) {
//       return e.id
//     })
//   })
//
//   $('.js-next').on('click', function() {
//     var nextIndex
//     var dataIdIndex = parkValues.indexOf(parseInt($('.js-next').attr('data-id')))
//     if (dataIdIndex === parkValues.length -1) {
//       nextIndex = 0
//     } else {
//       nextIndex = dataIdIndex + 1
//     }
//     $.get('/parks/' + parkValues[nextIndex], function(data) {
//       $
//     })
//   })
// });
