import { Component, OnInit } from '@angular/core';

import AppUtils from '../../utils/appUtils';
import { CardComponent } from '../card/card.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // card info. details
  totalBookDetails: any;
  availableBookDetails: any;
  rentedBookDetails: any;
  membersDetails: any;
  // selected card type
  selectedCard: any;
  // table data
  inputTableData: any;
  totalBooksTableData: any;
  availableBooksTableData: any;
  rentedBooksTableData: any;
  membersTableData: any;

  constructor() { }

  ngOnInit(): void {
    // init card and table details
    this.initCardData();
    this.initTableData();
  }

  // init card data
  initCardData() {
    this.totalBookDetails = {
      type: 'TOTAL_BOOKS',
      title: 'Total Books',
      count: AppUtils.getBooksCount('TOTAL_BOOKS')
    };
    this.availableBookDetails = {
      type: 'AVAILABLE_BOOKS',
      title: 'Available Books',
      count: AppUtils.getBooksCount('AVAILABLE_BOOKS')
    };
    this.rentedBookDetails = {
      type: 'RENTED_BOOKS',
      title: 'Rented Books',
      count: AppUtils.getBooksCount('RENTED_BOOKS')
    };
    this.membersDetails = {
      type: 'MEMBERS',
      title: 'Active Members',
      count: (AppUtils.getTableData('MEMBERS').tableData).length
    };
  }

  // init table data
  initTableData() {
    this.inputTableData = AppUtils.getTableData(this.totalBookDetails.type);
  }

  // card selection handler
  cardSelection($event) {
    this.selectedCard = $event.type;
    this.inputTableData.tableHeading = $event.title;
    this.updateTable(this.selectedCard);
  }

  // update dashboard table based on card selection
  updateTable(cardType) {
    this.inputTableData = AppUtils.getTableData(cardType);
  }

}
