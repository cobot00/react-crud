import {apiBase} from 'api/base.js';

class MockAPI {
  index() {
    return apiBase.get('/mock');
  }

  create(params) {
    return apiBase.post('/mock', params);
  }

  update(id, params) {
    return apiBase.put(`/mock/${id}`, params);
  }

  delete(id) {
    return apiBase.delete(`/mock/${id}`);
  }
}

export const mockAPI = new MockAPI();
