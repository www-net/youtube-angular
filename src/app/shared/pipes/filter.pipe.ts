import { Pipe, PipeTransform } from '@angular/core'
import { ISearchItem } from 'src/app/search/search-item.model'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: ISearchItem[], filterValue?: string): ISearchItem[] {
    if(!filterValue){
      return items
    }

    let newItems: ISearchItem[] = [...items]

    if(filterValue) {
      newItems = this.filter(newItems, filterValue)
    }

    return newItems

  }

  filter(items: ISearchItem[], filterValue: string) {
    return items.filter((item) => item.snippet.title.toLowerCase().includes(filterValue))
  }

}
