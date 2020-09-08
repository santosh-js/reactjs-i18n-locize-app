import { USERS } from "../../database/Users";

export const USER_SESSION = "unique_session_id";

export const FIRST_INDEX = 0;

function User(id, firstName, lastName, email, username, password) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.username = username;
  this.password = password;
}

class AuthService {
  logout() {
    sessionStorage.removeItem(USER_SESSION);
  }

  isLoggedIn() {
    if (sessionStorage.getItem(USER_SESSION) === null) return false;
    return true;
  }

  loginService(username, password) {
    const userArr = USERS.filter((user) => {
      return user.username === username;
    });
    console.log(userArr);
    if (userArr.length !== 0) {
      if (userArr[FIRST_INDEX].password === password) {
        // if ([{ password }] === password) {
        const base64user = window.btoa(username);
        sessionStorage.setItem(USER_SESSION, base64user);
        return true;
      }
      return false;
    }
  }

  registrationService({ id, firstName, lastName, email, username, password }) {
    const oldLen = USERS.length;
    const newLen = USERS.push(
      new User(id, firstName, lastName, email, username, password)
    );

    if (oldLen + 1 === newLen) return true;
    return false;
  }
}

export default new AuthService();
