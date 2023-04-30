import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemComponent } from './service-item/service-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardContactComponent } from './card-contact/card-contact.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';



@NgModule({
  declarations: [
    ServiceItemComponent,
    CardContactComponent,
    ServiceDetailComponent
  ],
  exports: [
    ServiceItemComponent,
    CardContactComponent,
    ServiceDetailComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ComponentLibraryModule { }
