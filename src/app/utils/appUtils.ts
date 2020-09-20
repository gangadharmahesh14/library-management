import { default as mockData } from '../mock-data/data.json';

export default class AppUtils {

  // get selected card's table object from it's type
  // @INOUT card type
  // @OUTPUT card's table data
  static getTableData(cardType) {
    let tableData: any = mockData.totalBooks;
    if (cardType === 'TOTAL_BOOKS') {
      tableData = {
        tableHeading: 'Total Book(s)',
        columns: mockData.bookColumns,
        tableData: mockData.totalBooks
      };
    } else if (cardType === 'AVAILABLE_BOOKS') {
      tableData = {
        tableHeading: 'Available Book(s)',
        columns: mockData.bookColumns,
        tableData: mockData.availableBooks
      };
    } else if (cardType === 'RENTED_BOOKS') {
      tableData = {
        tableHeading: 'Rented Book(s)',
        columns: mockData.bookColumns,
        tableData: mockData.lendedBooks
      };
    } else {
      tableData = {
        tableHeading: 'Active Member(s)',
        columns: mockData.memberColumns,
        tableData: mockData.activeMembers
      };
    }
    return tableData;
  }

  // get books count from card type
  // @INOUT table object
  // @OUTPUT book copies count
  static getBooksCount(cardType) {
    const tableObject = AppUtils.getTableData(cardType);
    const count = (tableObject.tableData).reduce( (bookCount, book) => ( bookCount + book.copies ), 0 );
    return count;
  }

  // get members rented books based on member id
  static getMembersRentedBooks(memberId) {
    const columnList = [...mockData.bookColumns];
    columnList.pop();
    for (const member of mockData.activeMembers) {
      if (member.membershipId === memberId) {
        return {
          tableHeading: `Rented books for ${member.username}`,
          columns: columnList,
          tableData: member.rentedBooksList,
          memberName: member.username
        };
      }
    }
  }

}
