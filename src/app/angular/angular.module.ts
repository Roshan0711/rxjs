import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFeaturesListComponent } from './angular-features-list/angular-features-list.component';
import { AngularDefinitionComponent } from './angular-detail/angular-definition/angular-definition.component';
import { RouterModule, Routes } from '@angular/router';
export const route : Routes = [
  {
    path:'',
    component: AngularFeaturesListComponent
  },
  {
    path:'angular-definition',
    component: AngularDefinitionComponent
  },
]

@NgModule({
  declarations: [
    AngularFeaturesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class AngularModule { }
