import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ComponentLibraryModule } from '../component-library/component-library.module';
import { ContactoRouterModule } from './contacto.routes';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ContactoRouterModule,
    ComponentLibraryModule
  ]
})
export class ContactoModule { }
