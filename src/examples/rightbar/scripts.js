document.addEventListener("DOMContentLoaded", function()
{
  // Add header and footer
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    console.log(`Including ${$(this).data('include')}`);
    var file = '/_subpages/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});


$(window).scroll((e) => {checkHeader();});
$(window).resize((e) => {checkWidth();});
$(document).ready(function()
{
  // Check width for sidebar position on page load
  checkWidth();
});


function checkHeader()
{
  if($(this).scrollTop() >= 100)
    document.getElementById("header").classList.add("change");
  else if($(this).scrollTop() == 0)
    document.getElementById("header").classList.remove("change");
}


function checkWidth()
{
  if($(window).width() <= 768)
    $(".wrapper").removeClass("toggled");
  else
    $(".wrapper").addClass("toggled");
}