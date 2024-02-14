import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'feb',
    loadChildren: ()=> import('./propose/propose.module').then(m => m.ProposeModule)
  },
  {
    path: '13-reasons-y',
    loadChildren: ()=> import('./thirteen-reasons-why/thirteen-reasons-why.module').then(m => m.ThirteenReasonsWhyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
