---
sidebar_position: 1 
---

# Handle Data from API

## XMLHttpRequest &amp; Ajax
`XMLHttpRequest` (XHR) objects are meant to interact with servers by retrieving data from a URL without refreshing the page. This is good when only part of the page needs to be updated. XMLHttpRequest has been used in `AJAX` programming.


## Fetch API
Fetch API is Promise based, resulting a more concise syntax compared to the ajax method.  
A basic fetch request is really simple to set up. Have a look at the following code:
```javascript title="Fetch basic request"
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

```

:::danger Note

By default, `fetch()` will not send or receive any ***cookies*** from the server, resulting in <u>unauthenticated</u> requests.

:::

### Supplying request options
The *fetch()* method can optionally accept a second parameter, an `init` object that allows you to control a number of different settings:

``` javascript title="An example of POST method implementation"
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

```