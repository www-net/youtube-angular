import { Component, EventEmitter, Output } from '@angular/core'
import { FilterService } from 'src/app/shared/services/filter.service'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Output() clickTune: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private filter: FilterService) {

  }

  onTuneClick(){
    this.clickTune.emit()
    this.filter.value = ''
  }
}
