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
      showmenu();
    else if($(this).scrollTop() == 0)
      hidemenu();
  });

  let type = getCookie("display");
  setDisplay(type);
});


function showmenu() {
  document.getElementById("header").classList.add("change");
}


function hidemenu() {
  document.getElementById("header").classList.remove("change");
}


function setCookieDisplay(type)
{
  console.log("Setting display cookie to", type);
	if(type==null)
		document.cookie = "display=; expires=01 Jan 1970 00:00:00 UTC; SameSite=Lax; path=/;";  // delete cookie by setting expire date in the past
	else
		document.cookie = "display=" + type + "; expires=31 Dec 2024 12:00:00 UTC; SameSite=Lax; path=/";
  setDisplay(type);
}


function setDisplay(type)
{
  if(type==null)
    return;

  $(`.thruhike h2 .icon`).removeClass("active");
  if(type==="tiles") {
    $(`.thruhike h2 .icon.${type}`).addClass("active");
    $('.wrapper.trail-list').fadeOut(100);
    $('.wrapper.trail-tiles').fadeIn(100);
  }
  if(type==="list") {
    $(`.thruhike h2 .icon.${type}`).addClass("active");
    $('.wrapper.trail-tiles').fadeOut(100);
    $('.wrapper.trail-list').fadeIn(100);
  }
}

/**
 * Scroll to anchor
 */
function scrollToAnchor(aid, e)
{
  const OFFSET = 16;
  if(e!=null)
    e.preventDefault();

  $('html,body').animate({scrollTop: $(aid).offset().top - OFFSET}, 'slow');
}


/**
 * Generic code to retrieve a cookie
 */
function getCookie(cname)
{
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


/**
 * Convert number to have . per 1000
 * Ex convert 15200 to 15.200
 */
function convert(num)
{
  if(num<1000)
    return num;

  const s = num.toString();
  const l = s.length;
  return s.substring(0, l-3) + "." + s.substring(l-3);
}