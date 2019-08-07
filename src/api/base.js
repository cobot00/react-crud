class APIBase {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  request(path, httpMethod, params = null) {
    const url = `${this.baseUrl}${path}`;
    const option = {
      method: httpMethod,
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }
    };

    if (['POST', 'PUT', 'DELETE'].some((method) => method === httpMethod)) {
      option.body = JSON.stringify(params);
    }

    return fetch(url, option)
      .then((res) => {
        return res.text().then((text) => {
          const status = res.status;
          return {data: text.trim(), status: status, ok: res.ok};
        });
      })
      .then((res) => {
        const data = res.data ? JSON.parse(res.data) : {};
        const result = {data: data, status: res.status};
        if (!res.ok) {
          return Promise.reject(result);
        }
        return result;
      });
  }

  get(path) {
    return this.request(path, 'GET');
  }

  post(path, params) {
    return this.request(path, 'POST', params);
  }

  put(path, params) {
    return this.request(path, 'PUT', params);
  }

  delete(path) {
    return this.request(path, 'DELETE');
  }
}

export const apiBase = new APIBase();

