const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem('currentUser', token)
  },
  getAuthToken() {
    window.localStorage.getItem('currentUser')
  },
  clearAuthToken() {
    window.localStorage.removeItem('currentUser')
  }
}

export default TokenService;