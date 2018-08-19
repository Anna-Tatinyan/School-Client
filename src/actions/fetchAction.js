const headersDefault = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + localStorage.user
};

export function generalFetch(url, method, body, headers = headersDefault) {
  return dispatch =>
fetch(`https://school-website-flux.herokuapp.com/${url}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body)
    })
    .then(response => {
      return response.json()

    })

    .catch(error => {
      console.log('request failed', error);
    });
}
