import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RxjsListComponent } from './rxjs-list/rxjs-list.component';
import { FromEventComponent } from './operatorList/from-event/from-event.component';
import { IntervalComponent } from './operatorList/interval/interval.component';
import { TimerComponent } from './operatorList/timer/timer.component';
import { OfFromComponent } from './operatorList/of-from/of-from.component';
import { ToArrayComponent } from './operatorList/to-array/to-array.component';
import { CustomObservableComponent } from './operatorList/custom-observable/custom-observable.component';
export const routes: Routes = [
  {
    path : '',
    component : RxjsListComponent,
  },
  {
    path : 'from-event',
    component : FromEventComponent
  },
  {
    path : 'interval',
    component : IntervalComponent
  },
   {
    path : 'timer',
    component : TimerComponent
  },
  {
    path : 'off-from',
    component : OfFromComponent
  },
  {
    path : 'to-array',
    component : ToArrayComponent
  },
  {
    path : 'custom-observable',
    component : CustomObservableComponent
  }
];


@NgModule({
  declarations: [
    RxjsListComponent,
    FromEventComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RxjsObservableModule { }
