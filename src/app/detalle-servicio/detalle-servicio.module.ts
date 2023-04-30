import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DetalleServicioRouterModule } from './detalle-servicio.routes';
import { ComponentLibraryModule } from '../component-library/component-library.module';
import { ContactoModule } from '../contacto/contacto.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    DetalleServicioRouterModule,
    ComponentLibraryModule,
    ContactoModule
  ]
})
export class DetalleServicioModule { }
