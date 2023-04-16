import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MainPageRouterModule } from './main-page.routes';
import { ComponentLibraryModule } from '../component-library/component-library.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    MainPageRouterModule,
    ComponentLibraryModule
  ]
})
export class MainPageModule { }
