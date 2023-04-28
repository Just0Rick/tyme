import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  public contactPhone: string;
  public contactMail: string;

  constructor() { 
    this.contactPhone = "+505 7736 0257";
    this.contactMail = "asesoresdeinvestofic@gmail.com";
  }

  get contactPhoneNoSpace(){
    return this.contactPhone.replace(/\s/g, '');
  }
}
