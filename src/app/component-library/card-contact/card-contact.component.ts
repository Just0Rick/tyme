import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition, faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.css']
})
export class CardContactComponent implements OnInit {
  @Input('item-id')
  public id: string = "0";

  @Input()
  public icon: IconDefinition = faAddressBook;

  @Input()
  public text: string = "+505 0000 0000";

  @Input()
  public data: any = '';

  @Output()
  public onClick= new EventEmitter<CardContactModel>();

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    let data: CardContactModel = {
      cardId: this.id,
      cardText: this.text,
      cardData: this.data
    };
    
    this.onClick.emit(data);
  }

}

export interface CardContactModel{
  cardId: string;
  cardText: string;
  cardData?: any;
}