import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginService, ILogin } from '../../services/login.service'
import { Router } from '@angular/router'

// пароль должен содержать:
// от одной строчной латинской буквы,
// от одной прописной латинской буквы,
// от одной цифры,
// от одного спецсимвола.
// минимальная длина пароля = 8 символов
const passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\\w\\s]).{8,}'


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
      password: new FormControl('', [Validators.required, Validators.pattern(passwordPattern)]),
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
    this.loginService.login(<ILogin>this.form.value)
    this.router.navigate(['/youtube'])
  }

  get loginValid() {
    return {
      required: this.form.get('login')?.errors?.['required'],
      email: this.form.get('login')?.errors?.['email']
    }
  }

  get passwordValid() {
    return {
      required: this.form.get('password')?.errors?.['required'],
      pattern: this.form.get('password')?.errors?.['pattern']
    }
  }
}
