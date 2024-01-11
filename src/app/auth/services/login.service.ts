import { Injectable } from '@angular/core'

const token = 'auth_token'

export interface ILogin {
  login: string,
  password: string,
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  login({login, password}: ILogin) {
    sessionStorage.setItem(token, `${login}.${password}`)
  }

  logout() {
    sessionStorage.removeItem(token)
  }

  isLoggedIn() {
    return !!sessionStorage.getItem(token)
  }
}
