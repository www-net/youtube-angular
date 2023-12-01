import { Component, ElementRef, ViewChild } from '@angular/core'
import { FilterService } from 'src/app/shared/services/filter.service'
import { ISort, TSortValue } from './sort.model'
import { SortService } from 'src/app/shared/services/sort.service'

const arrowTop = '↑'
const arrowBottom = '↓'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @ViewChild('date') date!: ElementRef
  @ViewChild('views') views!: ElementRef
  filterValue = ''
  sort: ISort = {}

  constructor(private filterService: FilterService, private sortService: SortService) {
  }

  setFilterValue() {
    this.filterService.value = this.filterValue.trim().toLowerCase()
  }

  setSortValue() {
    this.sortService.value = this.sort
  }

  handleSortClick(event: MouseEvent) {
    const target = event.target as HTMLElement
    const span = target.querySelector('span') as HTMLSpanElement
    const dataSortAttr = <TSortValue>target.getAttribute('data-sort')

    const setSortWhenFirstClick = () => {
      this.sort.property = dataSortAttr
      this.sort.order = 'ASC'
    }

    if (!this.sort.property) {
      setSortWhenFirstClick()
    } else {
      if (this.sort.property !== dataSortAttr) {
        if(dataSortAttr === 'date'){
          this.views.nativeElement.innerHTML = ''
        } else {
          this.date.nativeElement.innerHTML = ''
        }
        setSortWhenFirstClick()
      } else {
        this.sort.order = this.sort.order === 'ASC' ? 'DESC' : 'ASC'
      }
    }

    span.innerHTML = this.sort.order === 'ASC' ? arrowTop : arrowBottom

    this.setSortValue()
  }
}
