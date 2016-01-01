//= require_tree .

$(function() {

  // Smooth scroll to section ids
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Make the Vimeo embed respnsive to #main-panel width
  var videos = $("iframe[src='https://player.vimeo.com/video/145199432']");
  var fluidPanel = $("#main-panel");
  videos.each(function() {
    $(this)
      .data('aspectRatio', this.height / this.width)
      .removeAttr('height')
      .removeAttr('width');
  });
  $(window).resize(function() {
    var newWidth = fluidPanel.width();
    videos.each(function() {
      var $el = $(this);
      $el
        .width(newWidth)
        .height(newWidth * $el.data('aspectRatio'));
    });
  }).resize();
});
