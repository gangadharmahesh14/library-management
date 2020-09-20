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

  // select book
  addBook(book) {
    // this.selectedBooks.push(book);
    book.isSelected = !book.isSelected;
  }
}
