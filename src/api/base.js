class APIBase {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  request(path, httpMethod) {
    const url = `${this.baseUrl}${path}`;
    const option = {
      method: httpMethod,
      mode: 'cors',
      header: {
        'Accept': 'application/json',
      }
    };

    return fetch(url, option)
      .then((res) => {
        return res.json().then((json) => {
          const status = res.status;
          return {data: json, status: status};
        });
      });
  }

  get(path) {
    return this.request(path, 'GET');
  }
}

export const apiBase = new APIBase();

