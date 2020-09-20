import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], filtertext: string) {
    // table row keys
    let filterkeys = [];
    if (list && list.length) {
      filterkeys = Object.keys(list[0]);
    }
    // filter data based on filter-text
    const filterData = record => filterkeys.some(key => {
      const recordValue = (record[key] !== null && record[key] !== undefined) ? String(record[key]).toLowerCase() : '';
      return recordValue.includes(filtertext.toLowerCase());
    });
    return (filtertext && filterkeys.length) ? list.filter(filterData) : list;
  }
}
