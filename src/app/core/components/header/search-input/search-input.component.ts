import { Component, EventEmitter, Output } from '@angular/core'
import { FilterService } from 'src/app/youtube/services/filter.service'
import { ResultsService } from 'src/app/youtube/services/results.service'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Output() clickTune: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private filter: FilterService, private results: ResultsService) {

  }

  value = ''

  onClickSearchButton(){
    if(this.value.trim()) {
      this.results.isShow = true
    } else {
      this.results.isShow = false
    }
  }

  onTuneClick(){
    this.clickTune.emit()
    this.filter.value = ''
  }
}
