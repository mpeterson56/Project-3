import decode from 'jwt-decode';

class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // checks if user's logged in
  loggedIn() {
    // checking if there is a valid token associated with the user
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); 
  }

  // check if the token is already expired 
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // getting user token from local storage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // saving token to local storage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // clear user from local storage
    localStorage.removeItem('id_token');
    // reloading the page and reseting the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();