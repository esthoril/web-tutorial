//const apiUrl = 'https://example.com/data.json';
//const apiUrl = 'localhost:3000/examples/inputoutput/data.json';
const apiUrl = 'https://wicked-fawn-pajamas.cyclic.app';
let file;

function readJson()
{
  fetch(`${apiUrl}/data.json`, {
    method: 'GET',
    mode: 'cors'
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      file = data;
      //return data;
    })
    .catch(error => console.error("### GET failed ###", error));
}

function writeJson(data)
{
  data.field = 'new value';
  console.log("New data: ", data);

  fetch(`${apiUrl}`, {
  method: 'PUT',
  mode: 'cors',
  //headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)
})
  .then(res => { console.log(res); })
  //.then(response => response.json())
  //.then(updatedData => console.log(updatedData))
  .catch(error => console.error("### PUT failed ###", error));
}


$('button.read').click(() => {readJson();})
$('button.write').click(() => {writeJson(file);})
//const button = document.querySelector('button');
//button.addEventListener('click', readJson);