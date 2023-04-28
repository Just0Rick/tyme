import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.css']
})
export class CardContactComponent implements OnInit {

  @Input()
  public icon: IconDefinition = faAddressBook;

  @Input()
  public text: string = "+505 0000 0000";

  constructor() { }

  ngOnInit(): void {
  }

}
