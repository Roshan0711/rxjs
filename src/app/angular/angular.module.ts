import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFeaturesListComponent } from './angular-features-list/angular-features-list.component';
import { AngularDefinitionComponent } from './angular-detail/angular-definition/angular-definition.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentRefComponent } from './component-ref/component-ref.component';
import { TestComponent } from './test/test.component';
export const route : Routes = [
  {
    path:'',
    component: AngularFeaturesListComponent,
    canActivate : [],
    canActivateChild :[],
    canDeactivate :[],
    canLoad : []
  },
  {
    path:'angular-definition',
    component: AngularDefinitionComponent
  },
    {
    path:'component-ref',
    component: ComponentRefComponent
  },
]

@NgModule({
  declarations: [
    AngularFeaturesListComponent,
    ComponentRefComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class AngularModule {
  constructor(){
    console.log("Angular module lazely load")
  }
 }
