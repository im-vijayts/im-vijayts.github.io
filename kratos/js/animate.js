var $animation_swing = $('.scrollSwing');
var $animation_fadeInLeft = $('.scrollFadeInLeft');
var $animation_ZoomIn = $('.scrollZoomIn');
var $animation_card = $('.card');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_swing, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('swing');
    } else {
      $element.removeClass('swing');
    }
  });

  $.each($animation_fadeInLeft, function() {
    var $element = $(this);
    var element_height = $element.outerHeight() - 100;
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.removeClass('fadeOutRight');
      $element.addClass('fadeInLeft');
    } else {
      $element.removeClass('fadeInLeft');
      $element.addClass('fadeOutRight');
    }
  });

  $.each($animation_ZoomIn, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      // $element.removeClass('zoomOut');
      $element.addClass('zoomIn');
    } else {
      $element.removeClass('zoomIn');
      // $element.addClass('zoomOut');
    }
  });

  $.each($animation_card, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('flipInX');
    } else {
      $element.removeClass('flipInX');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');