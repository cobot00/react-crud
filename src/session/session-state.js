class SessionState {
  constructor() {
    this.session = {};
    this.authenticated = false;

    this.sessionKey = process.env.REACT_APP_SESSION_KEY || '';
    const session = JSON.parse(localStorage.getItem(this.sessionKey));
    if (session) {
      this.session = session;
      this.authenticated = true;
    }
  }

  login(session) {
    this.session = {
      sessionToken: session.sessionToken,
      refreshToken: session.refreshToken,
      expiredAt: session.expiredAt
    };
    localStorage.setItem(this.sessionKey, JSON.stringify(this.session));
    this.authenticated = true;
  }

  logout() {
    localStorage.removeItem(this.sessionKey);
    this.session = {};
    this.authenticated = false;
  }
}

const sessionState = new SessionState();

export default sessionState;
