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

    return items.filter((item) => item.snippet.title.toLowerCase().includes(filterValue))
  }

}
