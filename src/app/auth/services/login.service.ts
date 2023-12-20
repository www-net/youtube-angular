import { Injectable } from '@angular/core';

const token = 'auth_token'

export interface ILogin {
  login: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login({login, password}: ILogin) {
    localStorage.setItem(token, `${login}.${password}`)
  }

  logout() {
    localStorage.removeItem(token);
  }

  // ---------------------
  // доработать проверку  
  // ---------------------

  isLogin() {
    return localStorage.getItem(token)
  }
}
