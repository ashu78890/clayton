export function fetchAPI(url, method, token, body) {
  const requestHeaders = {
    'Content-type': 'application/json'
  }
  if (token) {
    requestHeaders.authorization = token;
  }

  const requestOptions = {
    method,
    headers: requestHeaders
  }

  if (body) {
    requestOptions.body = JSON.stringify(body)
  }


  return fetch(`http://bbqappdev.claytonsalfresco.com.au/backend${url}`, requestOptions)
  .then((response) => { return response.json()
  });
}