(function ($) {
  $(document).ready(function(){

    $('.scrollnav').click(function(event) {
      event.preventDefault();
      var target = $(this.hash);
        $('thml, body').animate({
          scrollTop: target.offset().top
        }, 1000);
    });
  });
})(jQuery);
