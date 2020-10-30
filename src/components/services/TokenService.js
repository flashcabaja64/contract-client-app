const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem('currentUser', token)
  },
  getAuthToken() {
    return window.localStorage.getItem('currentUser')
  },
  clearAuthToken() {
    window.localStorage.removeItem('currentUser')
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  }
}

export default TokenService;