import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  public contactPhone: string;
  public contactMail: string;

  constructor() { 
    this.contactPhone = "+505 8872 9722";
    this.contactMail = "example@gmail.com";
  }

  get contactPhoneNoSpace(){
    return this.contactPhone.replace(/\s/g, '');
  }
}
