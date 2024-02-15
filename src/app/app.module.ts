import { NgModule, Provider, isDevMode } from '@angular/core'
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { YoutubeInterceptorsToken } from './shared/validators/youtube-token.interceptor'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { YoutubeEffects } from './redux/effects/youtube.effects'
import { youtubeCardsReducer } from './redux/reducer/youtubeCards.reducer'
import { customCardsReducer } from './redux/reducer/customCard.reduser'

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: YoutubeInterceptorsToken,
  multi: true
}

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
    StoreModule.forRoot({
      youtubeCards: youtubeCardsReducer,
      customCards: customCardsReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([YoutubeEffects])
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
