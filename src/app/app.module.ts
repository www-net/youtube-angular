import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { SearchResultsComponent } from './search/search-results/search-results.component'
import { SearchItemComponent } from './search/search-item/search-item.component'
import { HeaderComponent } from './header/header.component'
import { FilterComponent } from './header/filter/filter.component'
import { MaterialDesignModule } from './material-design/material-design.module'
import { SearchInputComponent } from './header/search-input/search-input.component'
import { LoginComponent } from './header/login/login.component'
import { BorderBottomColorDirective } from './shared/directive/border-bottom-color/border-bottom-color.directive'
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SortPipe } from './shared/pipes/sort.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterComponent,
    SearchInputComponent,
    LoginComponent,
    BorderBottomColorDirective,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
