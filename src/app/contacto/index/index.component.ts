import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CardContactModel } from 'src/app/component-library/card-contact/card-contact.component';
import { GlobalsService } from 'src/app/globals.service';

@Component({
  selector: 'app-contacto-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public iconPhone: IconDefinition = faWhatsapp;
  public iconMail: IconDefinition = faEnvelope;

  constructor(public globals: GlobalsService) {
   }

  ngOnInit(): void {
  }

  onClicked(content: CardContactModel){
    let format = "https://wa.me/" + this.globals.contactPhoneNoSpace;
    if(content.cardId == "mail"){
      format = "mailto:" + this.globals.contactMail;
    }
    
    window.open(format, "_blank");
  }

}
