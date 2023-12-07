import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SearchItemComponent } from "./components/search-item/search-item.component"
import { SearchResultsComponent } from "./components/search-results/search-results.component"
import { MainComponent } from './pages/main/main.component'
import { MaterialDesignModule } from "../material-design/material-design.module"
import { FilterPipe } from "./pipes/filter.pipe"
import { SortPipe } from "./pipes/sort.pipe"
import { BorderBottomColorDirective } from "./directives/border-bottom-color/border-bottom-color.directive"
import { YoutubeRoutingModule } from "./youtube-routing.module"

@NgModule({
    declarations: [
        SearchItemComponent,
        SearchResultsComponent,
        MainComponent,
        FilterPipe,
        SortPipe,
        BorderBottomColorDirective,
    ],
    imports: [
        CommonModule,
        YoutubeRoutingModule,
        MaterialDesignModule,
    ],
})
export class YoutubeModule {

}