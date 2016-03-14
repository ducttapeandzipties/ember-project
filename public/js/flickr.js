$(document).ready(function(){
console.console.log('flickr js started');
// $getJSON(url,data to send, callback); < pattern for getJSON call
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
    });   // end

  photoHTML += '</ul>';
  $('#photos').html(photoHTML);
}
  $.getJSON(flickrAPI, flickrOptions, displayFlickr);
}); // end ready
