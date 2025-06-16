import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
import { DebounceTimerAndDistinctUntilChangedComponent } from './operatorList/debounce-timer-and-distinct-until-changed/debounce-timer-and-distinct-until-changed.component';
import { SubjectAndBehaviorSubjectComponent } from './operatorList/subject-and-behavior-subject/subject-and-behavior-subject.component';
import {SubjectModule } from '../subject/subject.module';
import { ReplayComponent } from './operatorList/replay/replay.component'
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
  },
  {
    path : 'debounceTimer-and-distinctUntilChanged',
    component : DebounceTimerAndDistinctUntilChangedComponent
  },
  {
    path : 'Subject-and-BehaviorSubject',
    component : SubjectAndBehaviorSubjectComponent,
  },
  {
    path : 'reply',
    component : ReplayComponent,
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
    RetryComponent,
    DebounceTimerAndDistinctUntilChangedComponent,
    SubjectAndBehaviorSubjectComponent,
    ReplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SubjectModule
  ]
})
export class RxjsObservableModule { }
