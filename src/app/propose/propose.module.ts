import { NgModule } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';

import { ProposeRoutingModule } from './propose-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    ProposeRoutingModule
  ],
  providers: [KeyValuePipe]
})
export class ProposeModule { }
