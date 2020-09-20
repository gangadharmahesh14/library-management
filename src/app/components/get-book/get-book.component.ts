import { Component, OnInit } from '@angular/core';

import AppUtils from '../../utils/appUtils';
import { CardComponent } from '../card/card.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.scss']
})
export class GetBookComponent implements OnInit {
  availableBookDetails: any;
  getBooksTableData: any;
  // members input fields
  memberDetails: any = {
    memberId: '',
    memberName: '',
    duration: '',
    returnDate: ''
  };
  selectedRows: any;

  constructor() { }

  ngOnInit(): void {
    // init card details
    this.availableBookDetails = {
      type: 'AVAILABLE_BOOKS',
      title: 'Available Books',
      count: AppUtils.getBooksCount('AVAILABLE_BOOKS'),
      hideSelection: true
    };
    // init table details
    this.getBooksTableData = AppUtils.getTableData('AVAILABLE_BOOKS');
    // allow table row selection
    this.getBooksTableData.allowSelection = true;
  }

  changeDuration(duration) {
    this.memberDetails.returnDate = this.getReturnDate(duration);
  }

  getReturnDate(duration) {
    const today = new Date();
    const date = today.getDate();
    today.setDate(date + duration);
    return today.toDateString();
  }

  // table row selection handler
  rowSelection($event) {
    this.selectedRows = $event;
  }

  lendBooks() {
    this.availableBookDetails.count = this.availableBookDetails.count - this.selectedRows.length;
    this.getBooksTableData.tableData = this.getBooksTableData.tableData.map((book) => {
      if (this.selectedRows.indexOf(book.id) !== -1) {
        book.copies = book.copies - 1;
        return book;
      } else {
        return book;
      }
    });
  }

}
