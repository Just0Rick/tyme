import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AcercaDeRouterModule } from './acercade.routes';
import { ComponentLibraryModule } from '../component-library/component-library.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    AcercaDeRouterModule,
    ComponentLibraryModule
  ]
})
export class AcercadeModule { }
