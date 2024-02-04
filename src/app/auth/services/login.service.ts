import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

const token = 'auth_token'

export interface ILogin {
  login: string,
  password: string,
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  isLog = new BehaviorSubject<boolean>(this.isLoggedIn())

  constructor(private router: Router){}

  login({login, password}: ILogin): void {
    sessionStorage.setItem(token, `${login}.${password}`)
    this.isLog.next(true)
  }

  logout() {
    sessionStorage.removeItem(token)
    this.isLog.next(false)
    this.router.navigate(['/'])
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem(token)
  }
}
