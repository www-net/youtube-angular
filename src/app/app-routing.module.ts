import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PageNotFoundComponent } from "./core/pages/page-not-found/page-not-found.component"
import { LoginFormComponent } from "./auth/pages/login-form/login-form.component"
import { AuthGuard } from "./core/guards/auth.guard"
import { YoutubeGuard } from "./youtube/guards/youtube/youtube.guard"

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
  path: 'login',
  component: LoginFormComponent,
  canActivate: [AuthGuard],
  },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [YoutubeGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
