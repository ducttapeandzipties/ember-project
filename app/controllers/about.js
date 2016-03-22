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


});  // end Controller
