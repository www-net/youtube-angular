import { Component, OnInit } from '@angular/core'
import { LoginService } from 'src/app/auth/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn!: boolean

  constructor(private loginService: LoginService) { }


  ngOnInit(): void {
    this.loginService.isLog.subscribe((isLog) => {
      this.isLoggedIn = isLog
    })
  }
  buttonText() {
    return this.isLoggedIn ? 'Logout' : 'Login'
  }

  onButtonClick(): void {
    if (this.isLoggedIn) {
      this.loginService.logout()
    }
  }

}


