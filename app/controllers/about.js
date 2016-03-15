import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    console.log('init function fired');

    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions =

      {
        tags: "automotive",
        format: "json"
      };

// init was here



      function displayFlickr(data) {
        var photoHTML = '<ul>';
        $.each(data.items, function(li, photo){
          photoHTML += '<li>';
          photoHTML += '<a href= "' + photo.link + '">';
          photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });   // end each

    photoHTML += '</ul>';
    $('#photos').html(photoHTML);
  }  // end displayFlickr
    $.getJSON(flickrAPI, flickrOptions, displayFlickr);

  },  // end init
  actions: {
    clicker: function(){
      console.log('clicker function fired');

// lightbox.js code was here
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);
console.log('append overlay');

// $("#gallery a").click(function(event){
//   event.preventDefault();
  console.log("click");
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  console.log('update overlay');

  //Show the overlay.
  $overlay.show();
  console.log('$overlay.show');

  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  console.log('set caption');
// });  //end .click

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});  // end overlay hide

    }   // end clicker
  }  // end actions

});  // end Controller
