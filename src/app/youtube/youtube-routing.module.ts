import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MainComponent } from "./pages/main/main.component"
import { YoutubeGuard } from "./guards/youtube/youtube.guard"
import { DetailedInformationComponent } from "./pages/detailed-information/detailed-information.component"

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [YoutubeGuard],
  },
  {
    path: ':id',
    component: DetailedInformationComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule { }
