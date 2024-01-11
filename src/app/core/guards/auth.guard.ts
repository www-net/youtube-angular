import { Injectable } from "@angular/core"
import { CanActivate } from "@angular/router"
import { LoginService } from "src/app/auth/services/login.service"

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private login: LoginService) {
  }
  canActivate(): boolean {
    return !this.login.isLoggedIn()
  }
}
