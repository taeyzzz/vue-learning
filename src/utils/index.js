const VUE_APP_SERVER_URL = process.env.VUE_APP_SERVER_URL

export function call(url, method, data) {
  const serverUrl = `${VUE_APP_SERVER_URL}${url}`
  return fetch(serverUrl, {
    method: method,
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(parseJSON)
    .then(checkHttpStatus)
    .catch(error => {
      // No response from the server
      if (typeof error.response === 'undefined') {
        error.response = {
          status: 408,
          message: 'Cannot connect to the server'
        }
      }
      throw error
    })
}

export function get(url) {
  return call(url, 'GET')
}

export function post(url, data) {
  return call(url, 'POST', data)
}

export function put(url, data) {
  return call(url, 'PUT', data)
}

export function del(url, data) {
  return call(url, 'DELETE', data)
}

export function patch(url, data) {
  return call(url, 'PATCH', data)
}

export function checkHttpStatus(response) {
