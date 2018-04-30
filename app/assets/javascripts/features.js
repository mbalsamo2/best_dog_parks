$(document).on('turbolinks:load', function() {
   // submit new feature via ajax
    $('form#new_feature').on('submit', 'form#new_feature', function(e) {
      e.preventDefault()
      // debugger
      console.log("hey")
      alert("twas clicked!")
    })
 })
