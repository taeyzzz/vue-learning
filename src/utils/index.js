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
  if (response.status >= 200 && response.status < 300) {
    return response.body
  }
     else {
    var error = new Error(response.statusText)
    error.response = response.body
    error.status = response.status
    throw error
  }
}

export function parseJSON(response) {
  return response.json()
    .then(function (body) {
      return {
        status: response.status,
        statusText: response.statusText,
        body: body
      }
    })
    .catch(function(e) {
      return response;
    })
}

export const storage = {
  get: function (k) {
    return localStorage.getItem(k);
  },
  set: function (k, v) {
    localStorage.setItem(k, v);
  },
  remove: function (k) {
    localStorage.removeItem(k)
  }
}
