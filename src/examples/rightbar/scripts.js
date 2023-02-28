document.addEventListener("DOMContentLoaded", function(){
  // Add header and footer
  $(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      console.log(`Including ${$(this).data('include')}`);
      var file = '/_subpages/' + $(this).data('include') + '.html';
      $(this).load(file);
    });
  });
});

$(document).ready(function() {

  // fade header in and out
  $(window).scroll(function (event) {
    if($(this).scrollTop() >= 100)
      document.getElementById("header").classList.add("change");
    else if($(this).scrollTop() == 0)
      document.getElementById("header").classList.remove("change");
  });

  $(function(){
    $(window).resize(function(e) {
      if($(window).width() <= 768)
        $(".wrapper").removeClass("toggled");
      else
        $(".wrapper").addClass("toggled");
    });
  });
});
