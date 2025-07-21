import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptFeaturesListComponent } from './javascript-features-list/javascript-features-list.component';
import { RouterModule, Routes } from '@angular/router';
export const route : Routes = [
  {
    path:'',
    component: JavascriptFeaturesListComponent
  }
]


@NgModule({
  declarations: [
    JavascriptFeaturesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class JavascriptModule { }
