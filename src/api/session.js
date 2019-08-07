import {apiBase} from 'api/base.js';

class SessionAPI {
  create(params) {
    return apiBase.post('/admin/session', params);
  }
}

export const sessionAPI = new SessionAPI();
