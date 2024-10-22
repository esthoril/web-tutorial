https://www.youtube.com/watch?v=e13T3O0Iyvc

## Heroku Alternatives

* Heroku alternatives https://www.youtube.com/watch?v=q8GSWGu2roA
* MongoBD on Cyclic https://www.youtube.com/watch?v=Uj2Iq8TCQVE

## Cyclic

https://app.cyclic.sh/#/deploy?intro=true


```javascript
// Make a PUT request to update the JSON file
fetch('/data.json', {
  method: 'PUT',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(updatedData => console.log(updatedData))
  .catch(error => console.error("### PUT failed ###", error));
```