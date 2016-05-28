(function ($) {
  $(document).ready(function(){

    $('.scrollnav').click(function(event) {
      event.preventDefault();
      var target = $(this.hash);
        $('thml, body').animate({
          scrollTop: target.offset().top
        }, 1000);
    });

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if(scroll >= 100) {
        $(document.body).addClass('bgchange');
      }
      if(scroll <= 100) {
        $(document.body).removeClass();
      }
    });


  });
})(jQuery);
