import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms'
import { LoginService, ILogin } from '../../services/login.service'
import { Router } from '@angular/router'

// минимальная длина пароля
const minLength = 6

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup


  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, this.checkLength])
    })
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
  }

  onSubmit() {
    this.form.value.login = this.form.value.login?.trim()
    this.form.value.password = this.form.value.password?.trim()
    this.loginService.login(<ILogin> this.form.value)
    this.router.navigate(['/youtube'])
  }

  // проверка длины пароля
  checkLength(control: FormControl): ValidationErrors | null {
    if (control.value.trim().length < minLength) {
      return {
        lengthError: true,
      }
    }
    return null
  }


  get login() {
    return this.form.get('login')
  }

  get password() {
    return this.form.get('password')
  }
}
