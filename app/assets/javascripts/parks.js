let featuresValues

$(document).on('turbolinks:load', function() {
  bindEventListeners();
})


function bindEventListeners() {
  // REQUIREMENT 3: reveals has-many relationship, a park has many features rendered on park show page
  $('a#load_features').on('click', function(e) {
    e.preventDefault();
    console.log(this.href);
    $.get(this.href + ".json").done(function(data) {
      console.log(data)
      $('div.park_features').html('');
      data.forEach(function(feature) {
        var newFeature = new Feature(feature.id, feature.name, feature.rating, feature.comment);
        var formattedFeature = newFeature.formatFeatureIndex();
        $('div.park_features').append(formattedFeature);
      });
    });
    history.pushState(null, null, this);
  });

// REQUIREMENT 1: feature index page
  $('a#load_features_index').on('click', function(e) {
    e.preventDefault();
    //console.log(this.href)
    $.getJSON(this.href).done(function(data){
      console.log(data)
      $('div.features_index').html('')
      data.forEach(function(feature) {
        var newFeatures = new Feature(feature.id, feature.name, feature.rating, feature.comment);
        var formattedFeatures = newFeatures.formatFeaturesIndex();
        $('div.features_index').append(formattedFeatures)
      })
    })
  })

// REQUIREMENT 4: submit new feature via ajax
  $('#new_feature').on('submit', function(e) {
    e.preventDefault();
    url = this.action;
    const data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: function(response) {
        var newFeature = new Feature(response.id, response.name, response.rating, response.comment);
        var formattedFeature = newFeature.formatFeatureIndex();
        $('div.park_features').append(formattedFeature);
        $('#feature_name').val('');
        $('#feature_rating').val('');
        $('#feature_comment').val('');
        // $('input[type="submit"]').prop('disabled', false) // how do i get this to work?
      }
      // $('form input[type="submit"]').prop('disabled', false);
    });
  });

// REQUIREMENT 2: next feature button
  $.getJSON('/features.json', function(data) {
     featuresValues = $.map(data, function(e) {
      return e.id
    })
  })
  $('.js-next').on('click', function(e) {
    e.preventDefault();
    let nextIndex
    let dataIdIndex = featuresValues.indexOf(parseInt($('.js-next').attr('data-id')))
    console.log(featuresValues)
    if (dataIdIndex === featuresValues.length - 1) {
      nextIndex = 0
    } else {
      nextIndex = dataIdIndex + 1
    }
    console.log(nextIndex)
    $.getJSON('/features/' + featuresValues[nextIndex], function(data) {
       $('#feature_show').html('')
      var aFeature = new Feature(data.id, data.name, data.rating, data.comment, data.parks);
      var showFeature = aFeature.formatFeatureShow();
      $('#feature_show').html(showFeature)
      history.pushState(null, null, '/features/' + data.id);
    })
  })

} // end of bindEventListeners function


// make feautre object
function Feature(id, name, rating, comment, parks) {
  this.id = id;
  this.name = name;
  this.rating = rating;
  this.comment = comment;
  this.parks = parks
}

// REQUIREMENT 5: Use of prototype to format
Feature.prototype.formatFeatureIndex = function() {
  var featureHtml = '';
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
  showHtml += `<h1 id="name" data-id` + this.id + `>` + this.name + `</h1>`;
  showHtml += `<p><a href="/features/${this.id}/edit">Edit Feature</a> - <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/features/${this.id}">Delete Feature</a> - <a href="#" class="js-next" data-id="${this.id}">Next Feature</a></p><br>`;
  showHtml += '<p> Rating: ' + this.rating + '</p>';
  showHtml += '<p> Comment: ' + this.comment + '</p>';
  showHtml += `<p>Found at: <a href="/parks/${this.parks[0].id}">${this.parks[0].name}</a></p>`
  return showHtml;
}

// REQUIREMENT 5: Use of prototype to format
Feature.prototype.formatFeaturesIndex = function() {
  var featureList = '';
  featureList += '<ul>';
  featureList += `<li><a href="/features/${this.id}" class="feature-title" data-id=` + this.id + '>' + this.name + '</a></li>';
  featureList += '</ul>'
  return featureList;
}
