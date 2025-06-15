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
import { MapComponent } from './operatorList/map/map.component';
import { PluckComponent } from './operatorList/pluck/pluck.component';
import { FilterComponent } from './operatorList/filter/filter.component';
import { TapComponent } from './operatorList/tap/tap.component';
import { TakeTakeLastTakeUntilComponent } from './operatorList/take-takeLast-takeUntil/take-takeLast-takeuntil.component';
import { RetryComponent } from './operatorList/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
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
  },
  {
    path : 'map',
    component : MapComponent
  },
  {
    path : 'pluck',
    component : PluckComponent
  },
  {
    path : 'filter',
    component : FilterComponent
  },
  {
    path : 'tap',
    component : TapComponent
  },
  {
    path : 'take-takeLast-takeUntil',
    component : TakeTakeLastTakeUntilComponent
  },
  {
    path : 'retry',
    component : RetryComponent
  }
];


@NgModule({
  declarations: [
    RxjsListComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeTakeLastTakeUntilComponent,
    RetryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class RxjsObservableModule { }
