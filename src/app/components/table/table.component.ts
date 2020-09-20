import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TableFilterPipe } from '../../filters/table-filter.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() inputTableData: any = {};
  @Output() rowselectEvent = new EventEmitter<string>();
  filterText = '';
  selectedBooksId: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  // check/uncheck books from table
  addBook(event, book) {
    book.isSelected = !book.isSelected;
    const isChecked = event.target.checked;
    if (isChecked) {
      this.selectedBooksId.push(book.id);
    } else {
      const searchedIndex = this.selectedBooksId.indexOf(book.id);
      this.selectedBooksId.splice(searchedIndex, 1);
    }
    this.rowselectEvent.emit(this.selectedBooksId);
  }
}
