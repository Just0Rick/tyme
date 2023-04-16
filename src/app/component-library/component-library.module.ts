import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemComponent } from './service-item/service-item.component';



@NgModule({
  declarations: [
    ServiceItemComponent
  ],
  exports: [
    ServiceItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentLibraryModule { }
