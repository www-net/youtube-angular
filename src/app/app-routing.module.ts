import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PageNotFoundComponent } from "./core/pages/page-not-found/page-not-found.component"

const routes: Routes = [
    {
        path: '',
        redirectTo: '/youtube',
        pathMatch: 'full',
    },
    {
        path: 'youtube',
        loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
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