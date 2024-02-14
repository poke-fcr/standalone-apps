import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirteenReasonsWhyRoutingModule } from './thirteen-reasons-why-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ThirteenReasonsWhyRoutingModule
  ]
})
export class ThirteenReasonsWhyModule { }
