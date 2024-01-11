import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginFormComponent } from './pages/login-form/login-form.component'
import { MaterialDesignModule } from '../material-design/material-design.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
