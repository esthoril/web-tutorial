
$(document).ready(function() {
  buildSidebar();
});


async function buildSidebar()
{
  let response = await fetch('sidebar_content.json');
  response = await response.json();

  response["years"].forEach(obj => {
    const year = obj.toString();
    const str = `<li><a href="archive.html?tag=${year}">${year}</a></li>`;
    $('#sidebar ul.years').append(str);
  });

  response["authors"].forEach(obj => {
    const str = `<li><a href="archive.html?tag=${obj}">${obj}</a></li>`;
    $('#sidebar ul.authors').append(str);
  });
}


/****
 * Old XMLHttpRequest way of doing it
 * https://stackoverflow.com/questions/48969495/in-javascript-how-do-i-should-i-use-async-await-with-xmlhttprequest
 **/
/*
function buildSidebar()
{
  console.log(`Building sidebar...`);

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'sidebar_content.json', true);
  xhr.responseType = 'text';

  xhr.onload = function(e)
  {
    const res = JSON.parse(this.responseText);
    const data = res["years"]
    data.forEach(obj => {
      const year = obj.toString();
      const str = `<li><a href="archive.html?tag=${year}">${year}</a></li>`;
      $('#sidebar ul.years').append(str);
    });
  };
  xhr.onerror = function()
  {
    reject({
      status: this.status,
      statusText: xhr.statusText
    });
  };
  xhr.send();
}
*/