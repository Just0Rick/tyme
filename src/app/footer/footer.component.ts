import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public finsta = faInstagram;
  public fface = faFacebook;
  public ftwit = faTwitter;
  public iHouse = faHome;
  public iPhone = faPhone;
  public iMail = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
