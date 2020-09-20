import { Component, OnInit, Input } from '@angular/core';

import { TableFilterPipe } from '../../filters/table-filter.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() inputTableData: any = {};
  filterText = '';
  selectedBooks: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  // check/uncheck books from table
  addBook(event, book, index) {
    // this.selectedBooks.push(book);
    book.isSelected = !book.isSelected;
    const isChecked = event.target.checked;
    if (isChecked) {
      this.selectedBooks.push(book);
    } else {
      const searchedIndex = this.selectedBooks.findIndex(x => x.id === book.id);
      this.selectedBooks.splice(searchedIndex, 0, 1);
    }
  }
}
