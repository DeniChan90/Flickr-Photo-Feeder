$('button').click(function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
    
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    
    var animal = $(this).text();
    
    var flickrOptions = {
        tags : animal,
        format : "json"
    };
    
    function displayPhotos(data) {
        var photoHTML = "<ul>";
        $.each(data.items, function(i, photo){
            photoHTML += "<li class = 'picLI'>";
            photoHTML += "<a href = '" + photo.link + "'>";
            photoHTML += "<img src = '" + photo.media.m + "'></a></li>";
        });
        
        photoHTML +="</ul>";
        $('#photos').html(photoHTML);
    }
    
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
});

$('form').submit(function(evt){
    evt.preventDefault();
    var $searchField = $('#search');
    var $submitButton = $('#submit');
    $searchField.prop('disabled', true);
    $submitButton.attr('disabled',true).val('searching...'); 
    
    var newFlickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    
    var result = $searchField.val();
    
    var newFlickrOptions = {
        tags : result,
        format : 'json'
    };
    
        function displayPhotos(data) {
            var photoHTML = "<ul>";
            $.each(data.items, function(i, photo){
                photoHTML += "<li class = 'picLI'>";
                photoHTML += "<a href = '" + photo.link + "'>";
                photoHTML += "<img src = '" + photo.media.m + "'></a></li>";
            });

            photoHTML +="</ul>";
            $('#photos').html(photoHTML);

            $searchField.prop('disabled', false);
            $submitButton.attr('disabled', false).val('search');

    }
    
    $.getJSON(newFlickrAPI, newFlickrOptions, displayPhotos);
});























