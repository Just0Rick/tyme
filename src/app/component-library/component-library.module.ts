import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemComponent } from './service-item/service-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ServiceItemComponent
  ],
  exports: [
    ServiceItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ComponentLibraryModule { }
