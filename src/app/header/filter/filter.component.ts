import { Component } from '@angular/core'
import { FilterService } from 'src/app/shared/services/filter.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterValue = ''

  constructor(private filter: FilterService) {

  }

  setFilterValue() {
    this.filter.value = this.filterValue.trim().toLowerCase()
  }
}
