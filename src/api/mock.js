import {apiBase} from 'api/base.js';

class MockAPI {
  index() {
    return apiBase.get('/mock');
  }
}

export const mockAPI = new MockAPI();
