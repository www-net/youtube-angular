import { Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { FilterService } from 'src/app/youtube/services/filter.service'
import { ResultsService } from 'src/app/youtube/services/results.service'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Output() clickTune: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private filter: FilterService, private results: ResultsService, private router: Router) {

  }

  value = ''

  onClickSearchButton(){
    if(this.value.trim()) {
      this.results.isShow = true
      this.router.navigate(['youtube'])
    }
  }

  onTuneClick(){
    this.clickTune.emit()
    this.filter.value = ''
  }
}
