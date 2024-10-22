const root = 'https://wicked-fawn-pajamas.cyclic.app'

$(document).ready(function()
{
  document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userFile = document.getElementById('file').files[0]; // stores the selected files in a list
    const userComments = document.getElementById('comments').value;

    const formData = new FormData(); // easy to store key-value pairs
    formData.append('user-file', userFile, 'user-file.jpg'); // 3rd parameter optional for file if we want to save it with a new name
    formData.append('user-comments', userComments);

    // Make post request
    fetch(`${root}/data.json`, {
    //fetch('http://localhost:3000/', {
      method: "POST",
      body: formData,
      mode: 'cors',
    })
    .then(res => res.json()) // returns a promise
    .then(data => console.log(data))
    .catch(err => console.log(err));
  })
});