import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';



@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [{
       path: '', component: AdminLayoutComponent
      }]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
