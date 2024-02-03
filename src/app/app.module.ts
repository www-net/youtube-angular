import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { MaterialDesignModule } from './material-design/material-design.module'
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component'
import { HeaderComponent } from './core/components/header/header.component'
import { FilterComponent } from './core/components/header/filter/filter.component'
import { SearchInputComponent } from './core/components/header/search-input/search-input.component'
import { LoginComponent } from './core/components/header/login/login.component'
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component'
import { AuthModule } from './auth/auth.module'
import { CreateCardComponent } from './core/pages/create-card/create-card.component'
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    SearchInputComponent,
    LoginComponent,
    PageNotFoundComponent,
    CreateCardComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
