import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MainPageRouterModule } from './main-page.routes';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    MainPageRouterModule
  ]
})
export class MainPageModule { }
