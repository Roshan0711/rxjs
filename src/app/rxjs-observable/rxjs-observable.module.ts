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
import { ReplayComponent } from './operatorList/replay/replay.component';
import { AsyncSubjectComponent } from './operatorList/async-subject/async-subject.component';
import { ConcatComponent } from './operatorList/concat/concat.component';
import { MergeComponent } from './operatorList/merge/merge.component';
import { MergeMapComponent } from './operatorList/merge-map/merge-map.component';
import { ConcatMapComponent } from './operatorList/concat-map/concat-map.component';
import { SwitchMapComponent } from './operatorList/switch-map/switch-map.component';
import { ExhaustMapComponent } from './operatorList/exhaust-map/exhaust-map.component';
import { ShareReplyComponent } from './operatorList/share-reply/share-reply.component';
import { CombineLatestComponent } from './operatorList/combine-latest/combine-latest.component';
import {ZipAndForkJoinComponent } from './operatorList/zip-and-fork-join/zip-and-fork-join.component';
import { CatchThrowErrorComponent } from './operatorList/catch-throw-error/catch-throw-error.component'
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
  },
  {
    path : 'async',
    component : AsyncSubjectComponent,
  },
  {
    path : 'concat',
    component : ConcatComponent,
  },
  {
    path : 'merge',
    component : MergeComponent,
  },
  {
    path : 'merge-map',
    component : MergeMapComponent,
  },
  {
    path : 'concat-map',
    component : ConcatMapComponent,
  },
  {
    path : 'switch-map',
    component : SwitchMapComponent,
  },
  {
    path : 'exhaust-map',
    component : ExhaustMapComponent,
  },
  {
    path : 'shareReply',
    component : ShareReplyComponent,
  },
  {
    path : 'combineLatest',
    component : CombineLatestComponent,
  },
  {
    path : 'zip-and-forkJoin',
    component : ZipAndForkJoinComponent,
  },
  {
    path : 'catchError-throwError',
    component : CatchThrowErrorComponent,
  },
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
    ReplayComponent,
    AsyncSubjectComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    ExhaustMapComponent,
    ShareReplyComponent,
    CombineLatestComponent,
    ZipAndForkJoinComponent,
    CatchThrowErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SubjectModule
  ]
})
export class RxjsObservableModule { }
