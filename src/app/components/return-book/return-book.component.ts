import { Component, OnInit } from '@angular/core';

import AppUtils from '../../utils/appUtils';
import { CardComponent } from '../card/card.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.scss']
})
export class ReturnBookComponent implements OnInit {
  rentedBookDetails: any;
  returnBooksTableData: any;
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
    this.rentedBookDetails = {
      type: 'RENTED_BOOKS',
      title: 'Total Rented Books',
      count: AppUtils.getBooksCount('RENTED_BOOKS'),
      hideSelection: true
    };
  }

  updateRentalTable(memberID) {
    const memberDetails = AppUtils.getMembersRentedBooks(memberID);
    this.returnBooksTableData = memberDetails;
    this.returnBooksTableData.allowSelection = true;
    // auto-fill member name
    this.memberDetails.memberName = (memberDetails && memberDetails.memberName) || '';
  }

  // table row selection handler
  rowSelection($event) {
    this.selectedRows = $event;
  }

  returnBooks() {
    this.rentedBookDetails.count = this.rentedBookDetails.count - this.selectedRows.length;
    this.returnBooksTableData.tableData = this.returnBooksTableData.tableData.filter((book) => this.selectedRows.indexOf(book.id) === -1);
    this.selectedRows = [];
  }

}
