$(document).ready(function()
{
  let tag = getUrlParameter('tag');
  buildContent(tag);
});


function buildContent(tag)
{
  $('#content').append(`<h1>Archive ${tag}</h1>`);
}


function getUrlParameter(sParam)
{
	var sPageURL = window.location.search.substring(1),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
		}
	}
}