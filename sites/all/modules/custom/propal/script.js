(function ($) {
  Drupal.behaviors.image_moment = {
    attach: function (context, settings) {
      $(document).delegate('#cine-tv-form img', 'click', function(e) {

        var offset = $(this).offset();
        var relativeX = Math.round(e.pageX - offset.left);
        var relativeY = Math.round(e.pageY - offset.top);

    		$("#edit-field-geo-x-und-0-value").val(relativeX);
    		$("#edit-field-geo-y-und-0-value").val(relativeY);
        setPointer(relativeX,relativeY);
        var $alert = $("<p>Les coordonnées ont été modifiées, X: " + relativeX + "  Y: " + relativeY + '</p>');
        $alert.css({
          'display': 'none',
          'position': 'absolute',
          'top': '0',
          'left': '50%',
          'width': '380px',
          'margin': '0',
          'margin-left': '-210px',
          'text-align': 'center',
          'padding': '20px',
          'background': 'white',
          '-webkit-box-shadow': '0px 5px 5px 0px black',
          '-moz-box-shadow': '0px 5px 5px 0px black',
          'box-shadow': '0px 5px 5px 0px black',
          'z-index': '999'
        });
        $(this).parent().append($alert);
        $alert.fadeIn(1000, function() {
          setTimeout(function() {
            $alert.fadeOut(1000, function() {
              $alert.remove();
            })
          }, 2000);
        });

      });

      $(document).delegate('.group-geolocalisation input', 'change', function() {
        var x = $('.group-geolocalisation .field-name-field-geo-x input').val();
        var y = $('.group-geolocalisation .field-name-field-geo-y input').val();
        setPointer(x,y);
      });
      function setPointer(x,y) {
        var point = $('<span class="point"></span>').css({
          position: 'absolute',
          'top': y+'px',
          'left': x+'px',
          'display': 'block',
          'width': '8px',
          'height': '8px',
          'margin-top': '-4px',
          'margin-left': '-4px',
          'background': '#fff',
          '-webkit-border-radius': '50%',
          '-moz-border-radius': '50%',
          'border-radius': '50%',
          '-webkit-box-shadow': '0px 5px 5px 0px black',
          '-moz-box-shadow': '0px 5px 5px 0px black',
          'box-shadow': '0px 5px 5px 0px black'
        });
        $('#cine-tv-form').find('.point').remove();
        $('#cine-tv-form').append(point);
      }
    }
  }
})(jQuery);