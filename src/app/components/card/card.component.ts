import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardDetails: any;
  @Output() cardSelectEvent = new EventEmitter<string>();
  selectedCard: any = 'TOTAL_BOOKS';

  constructor() {}

  ngOnInit(): void {
  }

  selectCard(cardDetails) {
    this.selectedCard = cardDetails.type;
    this.cardSelectEvent.emit(cardDetails);
  }

}
