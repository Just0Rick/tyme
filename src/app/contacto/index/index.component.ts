import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CardContactModel } from 'src/app/component-library/card-contact/card-contact.component';

@Component({
  selector: 'app-contacto-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public iconPhone: IconDefinition = faWhatsapp;
  public iconMail: IconDefinition = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(content: CardContactModel){
    let format = "https://wa.me/";
    if(content.cardId == "mail"){
      format = "mailto:";
    }
    const formres = `${format}${content.cardText.replace(/\s/g, '')}`;
    console.log(formres);
    window.open(formres, "_blank");
  }

}
