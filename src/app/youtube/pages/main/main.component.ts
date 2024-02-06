import { Component } from '@angular/core'
import { ResultsService } from '../../services/results.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor( public searchResult: ResultsService ){}

  isShowResults() {
    return this.searchResult.isShow
  }
}
