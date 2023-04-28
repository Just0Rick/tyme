import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemComponent } from './service-item/service-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardContactComponent } from './card-contact/card-contact.component';



@NgModule({
  declarations: [
    ServiceItemComponent,
    CardContactComponent
  ],
  exports: [
    ServiceItemComponent,
    CardContactComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ComponentLibraryModule { }
