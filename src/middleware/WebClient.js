import axios from 'axios';

class WebClient {
  constructor(baseUrl) {
    this.axios = axios.create({
      baseUrl,
    });
  }

  get(url, params) {
    return this.axios.get(url, { params });
  }
  post(url, data, params) {
    return this.axios.post(...arguments);
  }
  delete(url, id) {
    return this.axios.delete(url, {
      params: { id },
    });
  }
  put(url, data, params) {
    return this.axios.put(...arguments);
  }
};

const url = 'localhost:3000';
export default new WebClient(url);
