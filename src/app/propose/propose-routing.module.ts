import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:'admin',
    pathMatch: 'full',
    canActivate: [AdminGuard],
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposeRoutingModule { }
