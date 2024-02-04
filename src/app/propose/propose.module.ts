import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposeRoutingModule } from './propose-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProposeRoutingModule
  ]
})
export class ProposeModule { }
