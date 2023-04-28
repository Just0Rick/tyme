import { Component, OnInit } from '@angular/core';
import { IconDefinition, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public iconPhone: IconDefinition = faPhoneVolume;
  public iconMail: IconDefinition = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
