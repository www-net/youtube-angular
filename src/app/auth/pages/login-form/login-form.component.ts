import { Component } from '@angular/core'
import { FormBuilder, FormControl, Validators, } from '@angular/forms'
import { LoginService } from '../../services/login.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  form = this.fb.group({
    login: ['', [Validators.required, this.checkLength]],
    password: ['', [Validators.required, this.checkLength]],
  })

  constructor(
    private fb: FormBuilder,
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

  checkLength(control: FormControl) {
    if (control.value.trim().length === 0) {
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
