import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsListComponent } from './rxjs-list/rxjs-list.component';
import { FromEventComponent } from './operatorList/from-event/from-event.component';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  {
    path : '',
    component : RxjsListComponent,
  },
  {
    path : 'from-event',
    component : FromEventComponent
  }
];


@NgModule({
  declarations: [
    RxjsListComponent,
    FromEventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RxjsObservableModule { }
